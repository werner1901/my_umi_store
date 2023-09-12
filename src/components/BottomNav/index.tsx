import React, { useState, useRef, FC, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
import {
  AppOutline,
  TeamOutline,
  ShopbagOutline,
  FolderOutline

} from 'antd-mobile-icons'

const menu = [
  { title: '首页', link: '/',icon: <AppOutline /> },
  { title: '购物车', link: '/cart',icon:<FolderOutline /> },
  { title: '订单列表', link: '/olist',icon:<ShopbagOutline /> },
  { title: '我的', link: '/user',icon:<TeamOutline /> },
];

interface BottomNavProps {
  pathName: String;
}

const BottomNav: FC<BottomNavProps> = ({ pathName }) => {
  const setRouteActive = (value: string) => {
    history.push(value)
  }
  return (
    <TabBar tintColor="red">
      {menu.map(({ title, link,icon }) => (
        <TabBar.Item
          key={link}
          title={title}
          selected={pathName === link}
          icon={icon}
          onPress={() => {
            history.push(link);
          }}
        />
      ))}
    </TabBar>
  );
};

export default BottomNav