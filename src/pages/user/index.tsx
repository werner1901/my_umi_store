import React, { useEffect } from 'react';
import { connect, UserModelState,Dispatch } from 'umi';
import Header from './header';
import MyList from './mylist';
import Logout from './logout';

interface UserProps{
  user:UserModelState;
  dispatch:Dispatch;
}

const User: React.FC<UserProps> = ({ dispatch, user }) => {
  useEffect(() => {
    dispatch({ type: 'user/queryDetail' });
  }, []);
  const { name, icon } = user.detail;
  const logout = () => {
    dispatch({ type: 'user/logout' });
  };
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};

const mapStateToProps = ({
  user
}:{user:UserModelState}) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(User);
