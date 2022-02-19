import React from 'react';
import { screen, render } from '@testing-library/react';
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
  render(<PizzaCard pizza={mockPizza} />);
};

describe('Test1', () => {
  it('mockPizza1', () => {
    renderPizzas();
    expect(screen.getByText('Изи Фризи')).toBeVisible();
  });
});
