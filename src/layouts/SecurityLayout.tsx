import React, { ReactElement } from 'react';
import { connect, Redirect,UserModelState } from 'umi';

interface SecurityLayoutProps{
  user: UserModelState;
  children: ReactElement;
  location:Location
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({
  user,
  children,
  location,
}) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    // 没有登录 去登录页
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      />
    );
  }
  return children;
};

const mapStateToProps = ({ user }: { user: UserModelState }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(SecurityLayout);
