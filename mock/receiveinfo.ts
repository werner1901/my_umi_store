var Mock = require('mockjs');

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getDefaultReceivingInfo': {
    name: 'werner',
    tel: '1901',
    address: 'whatever',
  },
};
