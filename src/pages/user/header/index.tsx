import React from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Card, Flex } from 'antd-mobile';

const personal = [
  {
    num: 168,
    title: '商品关注',
    link: '',
  },
  {
    num: 9,
    title: '店铺关注',
    link: '',
  },
  {
    num: 0,
    title: '喜欢的内容',
    link: '',
  },
  {
    num: 100,
    title: '浏览记录',
    link: '',
  },
];

interface HeaderProps {
  name: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = ({ name, icon }) => {
  return (
    <div className={styles.main}>
      <Card full className={styles.header}>
        <Card.Header
          thumb={
            <div className={classnames(styles.userIcon)}>
              <img src={icon} alt="img" />
            </div>
          }
          title={<div className={styles.name}>{name}</div>}
        />

        <Card.Body>
          <Flex justify="between" className="font14">
            {personal.map((item, index) => (
              <Flex.Item
                key={index}
                className={classnames('flexNone', 'txtCenter')}
              >
                <div className={styles.textWhite}>{item.num}</div>
                <div className={styles.textWhite}>{item.title}</div>
              </Flex.Item>
            ))}
          </Flex>
        </Card.Body>
        <Card.Footer
          className={styles.textWhite}
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
    </div>
  );
};

export default Header;
