import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { userInfo } from '../../stores/userInfo';
import styles from './Home.module.scss';

const Home: NextPage = () => {
  const [userInfoState, setUserInfo] = useRecoilState(userInfo);

  return (
    <div>{userInfoState.nickname}123</div>
  )
}

export default Home