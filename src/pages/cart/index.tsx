import React, { useState, useEffect,FC } from 'react';
import styles from './index.less';
import { query } from '@/services/cart';
import { CartProductType } from '@/@types/product';
import List, { UpdateProductType } from './List';
import PayBar from './PayBar';
import { connect, history,Dispatch,CartModelState } from 'umi';
import { editCart } from '@/services/editCart';

interface CartState {
  cart: CartModelState;
  dispatch: Dispatch;
}

const Cart:FC<CartState> = ({  cart,
  dispatch}) => {
  const [list, setList] = useState<CartModelState>({data:[]});
  useEffect(() => {
    query().then((res) => {
      setList({data:res.list.data});
    });
  }, []);
  const updateProduct = (newState: UpdateProductType) => {
    const { id, index, count, checked } = newState;
    let data = list.data;
    if (count === 0) {
      data.splice(index, 1);
    } else {
      Object.assign(data[index], newState);
    }

    editCart({ id, count }).then((res) => {
      setList( {data:data} );
    });
  };

  const checkedAllChange = (allChecked: boolean) => {
    let data = list.data;
    data.forEach((item) => item.checked = allChecked);
    setList( {data:data} );
  };

  const goPay = () => {
    const data = list.data;
    const checkedData = data.filter((item) => item.checked)
    dispatch({
      type: 'cart/saveCart',
      payload: { data: checkedData },
    });
    history.push('/confirmBill')
  };

  return (
    <div className={styles.main}>
      <List data={list?.data} updateProduct={updateProduct} />
      <PayBar
        data={list?.data}
        checkedAllChange={checkedAllChange}
        goPay={goPay}
      />
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

export default connect(mapStateToProps)(Cart);