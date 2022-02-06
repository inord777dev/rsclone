import React from 'react';

import Carusel from '../carusel/carusel';
import CaruselTwo from '../caruselTwo/caruselTwo';
import PizzaCatalog from '../pizzaCatalog/pizzaCatalog';

import { useOutletContex } from '../main';

export default function Home() {
  const { pizzas } = useOutletContex();

  return (
    <main>
      <Carusel />
      <CaruselTwo />
      <PizzaCatalog pizzas={pizzas} />
    </main>
  );
}
