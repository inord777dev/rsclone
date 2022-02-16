/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import style from './caruselTwo.module.scss';
import bannerOne from '../../../assets/front/slider/slider_two/1.png';
import bannerTwo from '../../../assets/front/slider/slider_two/2.png';
import bannerThree from '../../../assets/front/slider/slider_two/3.png';
import bannerFour from '../../../assets/front/slider/slider_two/4.png';
import bannerFive from '../../../assets/front/slider/slider_two/5.png';

SwiperCore.use([Autoplay, Navigation]);

export default function CaruselTwo() {
  return (
    <div className={style.wrapper_swiper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a className={style.decoration} href="/">
            <div className={style.container}>
              <div>
                <div className={style.image}>
                  <img className={style.image_container} src={bannerOne} alt="no img" />
                </div>
              </div>
              <div className={style.size_text_container}>
                <h3 className={style.type_tittle}>LOVE COMBO</h3>
                <div className={style.type_text}>
                  С 12 по 14 февраля заказывайте на самовывоз комбо
                  из большой пиццы, 2-х горячих напитков и шокороллов и оплативайте через
                  систему Оплати по специальной цене всего 29,99 руб!
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                <img className={style.image_container} src={bannerTwo} alt="no img" />
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>СЕМЕЙНОЕ ПРЕДЛОЖЕНИЕ ЗА 26,49</h3>
              <div className={style.type_text}>
                Пицца из категории ЛЮБИМЫЕ
                большого размера + байтсы + напиток на выбор (1 л) - всего за 26,49 с ДОСТАВКОЙ!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                <img className={style.image_container} src={bannerThree} alt="no img" />
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>ЛЮКС комбо за 31,99!</h3>
              <div className={style.type_text}>
                Комплекс с доставкой
                по суперцене 31,99: пицца категории ЛЮБИМЫЕ большого размера с сырным бортом/
                HOT DOG бортом+ сладкие роллы + НАПИТОК 1 л на выбор!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                <img className={style.image_container} src={bannerFour} alt="no img" />
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>5 ПИЦЦ ПО ЦЕНЕ 75,99</h3>
              <div className={style.type_text}>
                В любой день недели заказывайте 5
                пицц среднего размера из представленного
                ассортимента пицц на классике/ тонком тесте со скидкой до 58 руб.
                по СУПЕРЦЕНЕ - 75,99!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.container}>
            <div>
              <div className={style.image}>
                <img className={style.image_container} src={bannerFive} alt="no img" />
              </div>
            </div>
            <div className={style.size_text_container}>
              <h3 className={style.type_tittle}>7 ПИЦЦ ПО ЦЕНЕ 99,99</h3>
              <div className={style.type_text}>
                В любой день недели заказывайте 7 пицц среднего размера
                из представленного ассортимента пицц на классике/
                тонком тесте со скидкой до 88 руб. по СУПЕРЦЕНЕ - 99,99!
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
