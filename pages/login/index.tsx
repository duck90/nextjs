import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { userInfo } from '../../stores/userInfo';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import callApi from '../../helpers/callApi';

import styles from './LoginPage.module.scss';

const LoginPage: NextPage = () => {
  const [userInfoState, setUserInfo] = useRecoilState(userInfo);
  const [id, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const login = async () => {
    const baseUrl = 'http://localhost:3001';
    const response = await callApi({
      method: 'GET',
      url: `${baseUrl}/users?userId=${id}&password=${password}`,
    })

    const responseData = !!response ? response.data : null;
    
    if (responseData.length) {
      setUserInfo({
        id: responseData[0].id,
        userId: responseData[0].userId,
        nickname: responseData[0].nickname,
      })
      router.push('/home');
    }
  }

  return (
    <div className={styles.container}>
      <Box sx={{ width: 300 }} >
        <TextField
          fullWidth
          label="Name"
          value={id}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Button
          variant="contained"
          onClick={login}
          style={{ float: 'right' }}
        >
          Login
        </Button>
      </Box>
  </div>
  )
}

export default LoginPage
