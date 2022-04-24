import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Button, Form, Input, Divider, Alert } from "antd";
import { IdcardOutlined, LockOutlined } from '@ant-design/icons';
import { motion } from "framer-motion"
import PropTypes from 'prop-types';

import { userStore } from '../../stores/UserStore';

export const LoginForm = () => {
	const router = useRouter();
	const [userInfo, setUserInfo] = useRecoilState(userStore);

	const onLogin = (values: { id: string, password: any }) => {
		setUserInfo({
			id: 1,
			userId: values.id,
			nickname: 'TEST',
			avator: 'default_thumb.jpg',
		})
		router.push('/home');
	};
	
	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				// animate={{ 
				// 	opacity: showMessage ? 1 : 0,
				// 	marginBottom: showMessage ? 20 : 0 
				// }}
				> 
				{/* <Alert type="error" showIcon message={message}></Alert> */}
			</motion.div>
			<Form 
				layout="vertical" 
				name="login-form" 
				initialValues={{}}
				onFinish={onLogin}
			>
				<Form.Item 
					name="id" 
					label="ID"
					rules={[ { 
							required: true,
							message: '아이디를 입력해주세요.',
						}]}>
					<Input prefix={<IdcardOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password"
					label={<span>Password</span>} 
					rules={[ { 
							required: true,
							message: '비밀번호를 입력해주세요.',
					} ]}
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						Sign In
					</Button>
				</Form.Item>
				{/* {
					otherSignIn ? renderOtherSignIn : null
				}
				{ extra } */}
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
};

LoginForm.defaultProps = {
	otherSignIn: true,
	showForgetPassword: false
};

export default LoginForm;
