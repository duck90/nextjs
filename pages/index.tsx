import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userStore } from '../stores/UserStore';

const NextPage: NextPage = () => {
  const [userInfoState, setUserInfo] = useRecoilState(userStore);
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/login');
    } else if (userInfoState.id === -1) {
      router.push('/login');
    } else {
      router.push('/home');
    }
  }, []);

  
  return null
}

export default NextPage
