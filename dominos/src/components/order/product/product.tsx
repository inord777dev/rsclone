import React from 'react';
import { IProduct } from '../../../common/types';

import style from './product.module.scss';

type ProductProps = {
  product: IProduct;
  onDeleteProduct: (products: IProduct) => void
};

export default function Product({ product, onDeleteProduct }: ProductProps) {
  const onDelete = () => {
    onDeleteProduct(product);
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
            <div className={style.product__price}>{`${product.price}`}</div>
            <div className={style.product__weight}>{`${product.weith}`}</div>
          </div>
          <div className={style.product__footerRight}>
            <div className={style.counter}>
              <button type="button" className={style.counter__decrease}>-</button>
              <input type="text" className={style.counter__intput} value={`${product.count}`} />
              <button type="button" className={style.counter__increase}>+</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className={style.product__delete} onClick={onDelete}>
        <span>
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
