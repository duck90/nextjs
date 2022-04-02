import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfo } from '../stores/userInfo';

import LoginPage from './login';

const NextPage: NextPage = () => {
  const [userInfoState, setUserInfo] = useRecoilState(userInfo);
  const router = useRouter()

  useEffect(() => {
    if (userInfoState.id === -1) {
      router.push('/login');
    } else {
      router.push('/home');
    }
  }, []);

  
  return (
    <LoginPage />
  )
}

export default NextPage
