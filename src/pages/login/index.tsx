import React from 'react';
import styles from './index.less';
import { connect, Redirect,UserModelState,Dispatch,Location } from 'umi';
import LoginForm from './loginform';
import { LoginParams } from '@/services/login';

interface LoginProps{
  user:UserModelState
  location:Location & { state: { from: string } };
  dispatch:Dispatch
}

const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }
  const handleSubmit = (value: LoginParams) => {
    dispatch({ type: 'user/login', payload: value });
  };
  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm handleSubmit={handleSubmit} />
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

export default connect(mapStateToProps)(Login);
