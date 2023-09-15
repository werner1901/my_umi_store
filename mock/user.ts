import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    status: 1,
    name: 'werner',
    icon:
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=252552850,3455647714&fm=26&gp=0.jpg',
    userid: '001',
  },
  'POST /api/login': (req: Request, res: Response) => {
    const { password, name } = req.body;
    if (password === '123' && name === 'werner') {
      res.send({
        status: 1,
        name: 'werner',
        icon:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=252552850,3455647714&fm=26&gp=0.jpg',
        userid: '001',
      });
    } else {
      res.send({
        status: 0,
        msg: '账号或者密码错误！',
      });
    }
  },
  'GET /api/logout': {
    data: { msg: 'success' },
  },
};
