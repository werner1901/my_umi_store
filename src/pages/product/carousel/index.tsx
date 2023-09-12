import React from 'react';
import { Card, Carousel } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

const productCarousel = ({ data }: { data: String[] }) => {
  return (
    <Card full>
      <Carousel className={styles.main} autoplay={false} infinite>
        {data.map((item, index) => (
          <a
            className={classnames(styles.carouselItem, 'xyCenter')}
            key={index}
          >
            <img
              src={item}
              alt="图片"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
    </Card>
  );
};

export default productCarousel;
