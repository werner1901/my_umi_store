import React, { useEffect } from 'react';
import { connect, UserModelState, Dispatch } from 'umi';
import BottomNav from '@/components/BottomNav';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  user: UserModelState;
  dispatch: Dispatch;
  location: Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, location, dispatch, user } = props;

  useEffect(() => {
    // 获取用户基本信息
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const { pathname } = location;
  const showBottomNav = pathname !== '/login';
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{showBottomNav && <BottomNav pathName={pathname} />}</footer>
    </div>
  );
};

const mapStateToProps = ({ user }: { user: UserModelState }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(BasicLayout);
