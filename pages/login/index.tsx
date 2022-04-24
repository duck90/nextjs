import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Card, Row, Col } from "antd";
import { useRecoilState } from 'recoil';
import LoginForm from './LoginForm'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import callApi from '../../helpers/callApi';
import styles from './LoginPage.module.scss';

const LoginPage: NextPage = (props) => {
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
                      <LoginForm {...props} />
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
