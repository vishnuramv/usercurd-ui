import React, { useState } from 'react'
import { Card, Input, Button, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";

const AddUser = () => {
	const [name, setName] = useState('')
	const [phoneno, setPhoneno] = useState('')
	const [email, setEmail] = useState('')
	const history = useHistory();
	const onFinish = (values) => {
	    console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
	    console.log('Failed:', errorInfo);
	};
	const addUser = async () => {
		const reqOptions = {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json",
	            Accept: "application/json",
	        },
	        body: JSON.stringify({ name: name, phone_no: phoneno, email: email }),
	    };
		await fetch("https://usercrud-api.herokuapp.com/api/create/", reqOptions).then(() => history.push("/"));
	}
	return (
		<div style={{ width:'100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
			<Card
				hoverable
				style={{ width: 300 }}
				title="Add User"
				align="center"
			>
				<Form
				  name="basic"
				  wrapperCol={{ span: 24 }}
				  initialValues={{ remember: true }}
				  onFinish={onFinish}
				  onFinishFailed={onFinishFailed}
				>
					<Form.Item
					    name="name"
					    rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input size="large" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" allowClear prefix={<UserOutlined />} />		      
					</Form.Item>

					<Form.Item
						name="email"
						rules={[{ required: true, message: 'Please input your Email Address!' },{ type: 'email', message: 'The input is not valid E-mail!'},]}
					>
						<Input type="email" size="large" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" allowClear prefix={<UserOutlined />} />
					</Form.Item>
					<Form.Item
						name="phone_no"
						rules={[{ required: true, message: 'Please input your Phone number!' }]}
					>
						<Input size="large" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} placeholder="Phone Number" allowClear prefix={<UserOutlined />} />
					</Form.Item>

					<Form.Item>
						<Button onClick={addUser} type="primary" htmlType="submit">
						  Submit
						</Button>
					</Form.Item>
				</Form>
				
			</Card>
		</div>
	)
}

export default AddUser