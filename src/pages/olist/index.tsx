import React, { FC, useState, useEffect } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { query } from '@/services/olist';
import { CartProductType } from '@/@types/product';
import List from './list/index';

export interface OListState {
  data: CartProductType[];
}

const OList = () => {
  const [list, setList] = useState<OListState>({ data: [] });
  useEffect(() => {
    query().then((res) => {
      setList({ data: res.list.data });
    });
  }, []);
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <List data={list.data} />
    </WingBlank>
  );
};

export default OList;
