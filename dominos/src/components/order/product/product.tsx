import React from 'react';
import { IProduct } from '../../../common/types';

import style from './product.module.scss';

type ProductProps = {
  product: IProduct
  onProductDelete: (products: IProduct) => void
  onProductPlusOne: (products: IProduct) => void
  onProductMinusOne: (products: IProduct) => void
  onProductCountSet: (products: IProduct) => void
};

export default function Product(
  {
    product, onProductDelete, onProductPlusOne, onProductMinusOne, onProductCountSet,
  }: ProductProps,
) {
  const onClickDelete = () => {
    onProductDelete(product);
  };

  const onClickPlusOne = () => {
    onProductPlusOne(product);
  };

  const onClickMinusOne = () => {
    onProductMinusOne(product);
  };

  const onChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    onProductCountSet(
      {
        ...product,
        count: parseInt(e.target.value, 10),
      },
    );
  };

  return (
    <div className={style.product__card}>
      <div className={style.product__img}>
        <img src={`${process.env.PUBLIC_URL || ''}/pizza/${product.image}`} alt={product.image} width="146px" height="146px" />
      </div>
      <div className={style.product__context}>
        <div className={style.product__title}>{`${product.name}`}</div>
        <div className={style.product__text}>{`${product.type}, ${product.hasMazarella ? 'Моцарелла, ' : ''} ${product.size}`}</div>
        <div className={style.product__text}>{`${product.components}`}</div>
        <div className={style.product__footer}>
          <div className={style.product__footerLeft}>
            <div className={style.product__price}>{`${parseFloat(product.price) * product.count}`}</div>
            <div className={style.product__weight}>{`${product.weith}`}</div>
          </div>
          <div className={style.product__footerRight}>
            <div className={style.counter}>
              <button type="button" className={style.counter__decrease} onClick={onClickMinusOne}>-</button>
              <input type="text" className={style.counter__intput} value={product.count} onChange={onChangeCount} />
              <button type="button" className={style.counter__increase} onClick={onClickPlusOne}>+</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className={style.product__delete} onClick={onClickDelete}>
        <span>
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
