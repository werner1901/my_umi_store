import React, { FC, useEffect, useState } from 'react';
import styles from './[id].less';
import { query } from '@/services/product';
import { IRoute,useParams } from 'umi';
import { ProductType } from '@/@types/product';
import Carousel from './carousel';
import Tags from '@/components/Tags';
import { Card, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import CartAndBuy from './cart';

export interface QueryItem {
  id: string;
}

const Product: FC<IRoute> = () => {
  const [list, setList] = useState<ProductType>({
    id: '',
    imgs: [],
    price: 0,
    title: '',
    tags: [],
  });
  const params = useParams();

  useEffect(() => {
    // 获取商品详情
    query(params).then((res) => {
      setList({ ...res.data });
    });
  }, []);

  const { imgs, price, title, tags } = list;
  return (
    <div className={styles.main}>
      <Carousel data={imgs} />
      <WhiteSpace size="lg" />
      <Card full>
        <p className={classnames('red', 'bold')}>￥{price}</p>
        <p className="font14">{title}</p>
        <WhiteSpace size="lg" />
        <Tags tags={tags} />
      </Card>
      <CartAndBuy product={list} />
    </div>
  );
};

export default Product;
