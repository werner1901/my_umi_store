var Mock = require('mockjs');
import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getUserDetail': {
    status: 1,
    id: '001',
    name: 'werner',
    icon:
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=252552850,3455647714&fm=26&gp=0.jpg',
    email: 'werner@163.com',
    signature: 'hello world',
    title: 'werner',
    tags: [
      {
        key: '0',
        label: 'werner',
      },
      {
        key: '1',
        label: 'werner',
      },
      {
        key: '2',
        label: 'werner',
      },
    ],
    country: 'China',
    address: '上海',
    phone: '0110-20204123',
  },
};