import React, { useState, FC, useEffect } from 'react';
import { ProductType } from '@/@types/product';
import { Card, ListView, WingBlank, Icon } from 'antd-mobile';
import styles from './index.less';
import { Link } from 'umi';
import classnames from 'classnames';
import Tags from '@/components/Tags';
import { PaginationType } from '@/@types/list';

interface ListProps {
  data: ProductType[];
  pagination: PaginationType;
  queryList: Function;
}
interface ListState {
  dataSource: any;
}

const Node = ({ img, title, price, tags, id }: ProductType) => {
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className={classnames(styles.imgBox, 'xyCenter')}>
        <img src={img} />
      </div>
      <WingBlank size="lg" className={styles.ctn}>
        <div className="twoRows">{title}</div>
        <div className={classnames(styles.priceBox, 'font16')}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.price}>{price}</span>
        </div>
        <Tags tags={tags} />
      </WingBlank>
    </Link>
  );
};

const searchList: FC<ListProps> = ({ data, pagination, queryList }) => {
  const [list, setList] = useState<ListState>({
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1: any, r2: any) => r1 !== r2,
    }),
  });

  const onEndReached = () => {
    if (pagination.pageNo < pagination.totalPage - 1) {
      queryList({
        pageNo: pagination.pageNo + 1,
      });
    }
  };

  useEffect(() => {
    queryList();
  }, []);

  return (
    <Card full className={styles.main}>
      {data.length > 0 ? (
        <ListView
          dataSource={list.dataSource.cloneWithRows(data)}
          renderRow={(item) => Node(item)}
          pageSize={pagination.pageSize}
          initialListSize={pagination.pageSize}
          onEndReached={onEndReached}
          useBodyScroll={true}
          renderFooter={() => (
            <div className="txtCenter">
              {pagination.pageNo < pagination.totalPage - 1 ? (
                <Icon type="loading" />
              ) : (
                <div>加载完毕</div>
              )}
            </div>
          )}
          onEndReachedThreshold={10}
        />
      ) : (
        <div className="txtCenter font14">暂无数据</div>
      )}
    </Card>
  );
};


export default searchList