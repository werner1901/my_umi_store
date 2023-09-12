import React, { FC, useState, useEffect } from 'react';
import { WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import ReceivingInfo, { ReceivingInfoType } from './receiveinfo';
import { getDefaultReceivingInfo } from '@/services/confirmBill';
import { connect, history, Dispatch, CartModelState } from 'umi';
import ListNode from './listnode';
import PayBar from './paybar';

export interface ConfirmBillState {
  receivingInfo: ReceivingInfoType;
}

interface ConfirmBillProps {
  cart: CartModelState;
  dispatch: Dispatch;
}

const ConfirmBill: FC<ConfirmBillProps> = ({ cart, dispatch }) => {
  const [info, setInfo] = useState<ConfirmBillState>({
    receivingInfo: {
      name: '',
      tel: '',
      address: '',
    },
  });

  useEffect(() => {
    const list = cart.data;
    if (list.length === 0) {
      Toast.info('请重新进入确认订单页面！');
      history.go(-1);
    } else {
      getDefaultReceivingInfo().then((res) => {
        setInfo({ receivingInfo: { ...res } });
      });
    }
  }, []);

  const { data } = cart;
  let totalPrice = 0,
    allCount = 0;
  const getList = data.map((item) => {
    if (item.checked) {
      totalPrice += item.price * item.count;
      allCount += item.count;
    }
    return <ListNode key={item.id} {...item} />;
  });
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <ReceivingInfo {...info.receivingInfo} />
      <WhiteSpace size="lg" />
      <div>{getList}</div>
      <PayBar totalPrice={totalPrice} count={allCount} />
    </WingBlank>
  );
};

const mapStateToProps = ({ cart }: { cart: CartModelState }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(ConfirmBill);
