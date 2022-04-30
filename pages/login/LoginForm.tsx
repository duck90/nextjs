import React from 'react';
import { Button, Form, Input, Divider, Alert } from "antd";
import { IdcardOutlined, LockOutlined } from '@ant-design/icons';
import { motion } from "framer-motion"
import PropTypes from 'prop-types';

import styles from './LoginPage.module.scss';

interface LoginFormProps {
	onLogin: Function;
	failMessage?: string;
}

export const LoginForm = (props: LoginFormProps) => {
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
				onFinish={(values) => props.onLogin(values)}
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
						로그인
					</Button>
					{props.failMessage && <p className={styles.fail_message}>{props.failMessage}</p>}
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
