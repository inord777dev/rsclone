/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import store from '../../../../store/store';

import PizzaCard from './pizzaCard';

const mockPizza = {
  id: '61ea74fb1c78865de913192b',
  key: '0',
  name: 'Изи Фризи',
  image: 'izi_frizi_small.png',
  price: '28.89 руб.',
  weith: '705 гр',
  isHit: false,
  components: 'Сыр моцарелла, Картофель фри, Соус Ранч, Сосиски куриные, Ветчина',
};

const renderPizzas = () => {
  render(
    <Provider store={store}>
      <PizzaCard pizza={mockPizza} />
    </Provider>,
  );
};

describe('PizzaCard test', () => {
  it('mockPizza', () => {
    renderPizzas();
    expect(screen.getByText('Изи Фризи')).toBeVisible();
  });
});
