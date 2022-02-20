import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

import style from './statistics.module.scss';
import DateService from '../../../services/DateService';
import { IOrder, OrderStatus } from '../../../common/types';

type StatisticsProps = {
  orders: IOrder[]
};

export default function Statistics({ orders }: StatisticsProps) {
  const [dataLineChart, setDataLineChart] = useState<(string | number)[][]>([]);
  const [dataPieChart, setDataPieChart] = useState<(string | number)[][]>([]);

  const optionsLineChart = {
    title: 'Валовая выручка',
    legend: { position: 'bottom' },
  };

  const optionsPieChart = {
    title: 'Популярные товары',
    pieHole: 0.4,
    is3D: false,
  };

  const yearIndex = (year: number, currentYear: number) => (year === currentYear ? 2 : 1);

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();

    const initialLineChart: (string | number)[][] = [
      ['Месяц', (currentYear - 1).toString(), currentYear.toString()],
      ['Янв', 0, 0],
      ['Фев', 0, 0],
      ['Мар', 0, 0],
      ['Апр', 0, 0],
      ['Май', 0, 0],
      ['Июн', 0, 0],
      ['Июл', 0, 0],
      ['Авг', 0, 0],
      ['Сен', 0, 0],
      ['Окт', 0, 0],
      ['Ноя', 0, 0],
      ['Дек', 0, 0],
    ];

    const initialPieChart: (string | number)[][] = [
      ['Count', 'Pizza'],
    ];

    orders
      .filter((order) => order.status === OrderStatus.Completed)
      .forEach((order) => {
        const date = DateService.toDate(order.date);
        const year = date.getFullYear();
        const month = DateService.toDate(order.date).getMonth();
        const price = initialLineChart[month + 1][yearIndex(year, currentYear)] as number;
        initialLineChart[month + 1][yearIndex(year, currentYear)] = price + order.price;

        order.products.forEach((product) => {
          const PieChartItem = initialPieChart.find(
            (initialItem) => initialItem[0] === product.name,
          );
          if (PieChartItem == null) {
            const newItem: (string | number)[] = [product.name, product.count];
            initialPieChart.push(newItem);
          } else {
            const count = PieChartItem[1] as number;
            PieChartItem[1] = count + product.count;
          }
        });
      });
    setDataLineChart(initialLineChart);
    setDataPieChart(initialPieChart);
  }, [orders]);

  return (
    <div className={style.statistics}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={dataLineChart}
        options={optionsLineChart}
      />
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={dataPieChart}
        options={optionsPieChart}
      />
    </div>
  );
}
