import React, { useCallback } from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { ProductType } from '@/@types/product';
import { Toast } from 'antd-mobile';
import { connect, history,Dispatch,CartModelState } from 'umi';
import { editCart } from '@/services/editCart';

interface CartState {
  cart: CartModelState;
  dispatch: Dispatch;
  product: ProductType;
}

const CartAndBuy: React.FC<CartState> = ({ product, dispatch }) => {
  // const addToCart = useCallback(() => {
  //   editCart({ id: product.id, increment: 1 }).then((res) => {
  //     Toast.success(product.title + '已加入购物车！');
  //   });
  // }, [product]);



  const addToCart = useCallback(() => {
    dispatch({
      type:'cart/saveCart',
      payload:{
        data:[{...product,count: 1, checked: false, img: product.imgs[0] }]
      }
    })
    Toast.success(product.title + '已加入购物车！');
  },[product])

  const goPay = useCallback(() => {
    dispatch({
      type: 'cart/saveCart',
      payload: {
        data: [{ ...product, count: 1, checked: true, img: product.imgs[0] }],
      },
    });
    history.push('/confirmBill');
  }, [product]);

  return (
    <div className={styles.main}>
      <Link to="/cart" className={classnames(styles.cart)}>
        <span className="iconfont icon-3 font16"></span>
        <p className={styles.title}>购物车</p>
      </Link>
      <div
        className={classnames(styles.addCart, styles.btn)}
        onClick={addToCart}
      >
        加入购物车
      </div>
      <div className={classnames(styles.buyNow, styles.btn)} onClick={goPay}>
        立即购买
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cart
}:{cart:CartModelState}) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(CartAndBuy);
