import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Card, Row, Col } from "antd";
import { setCookies, getCookie } from 'cookies-next';
import LoginForm from './LoginForm'
import MemberService from 'services/memberService';
import styles from './LoginPage.module.scss';

const LoginPage: NextPage = (props) => {
  const router = useRouter();
	const [failMessage, setFailMessage] = useState('');

  useEffect(() => {
    const jwt = getCookie('jwt')
    
    if (!!jwt) {
      router.replace('/normal-member')
    }
  })

  const onLogin = async (values: { id: string, password: any }) => {
		const result = await MemberService.login({
        loginID: values.id,
        password: values.password,
        deviceID: null
    })

		if(!result.success){
      setFailMessage(result.message)
      return
    } else if (result.data.memberType !== 'admin') {
      setFailMessage('관리자 계정으로 로그인해주세요.')
    }
		setCookies('jwt', result.data.authToken);
		router.push('/normal-member');
	};

	return (
    <div className="auth-container">
      <div className={`h-100 ${styles.container}`}>
        <div className="container d-flex flex-column justify-content-center h-100">
          <Row justify="center">
            <Col xs={20} sm={20} md={20} lg={7}>
              <Card>
                <div className="my-4">
                  <div className="text-center">
                    <img className="img-fluid" src='/assets/images/logo.png' alt="" />
                    {/* <p>Don't have an account yet? <a href="/auth/register-1">Sign Up</a></p> */}
                    <p className={styles.login_page_title}>브레인 헬스 관리자</p>
                  </div>
                  <Row justify="center">
                    <Col xs={24} sm={24} md={20} lg={20}>
                      <LoginForm onLogin={onLogin} failMessage={failMessage}/>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
	)
}

export default LoginPage
