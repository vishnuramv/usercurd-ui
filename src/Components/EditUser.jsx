import React, { useState,useEffect } from 'react'
import { Card, Input, Button, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";

const EditUser = ({ location }) => {
	const history = useHistory();
	const [form] = Form.useForm();


	useEffect(() => {
		form.setFieldsValue({
			name:location.state.user.name,
		    email:location.state.user.email,
		    phone_no:location.state.user.phone_no,
		})
	}, [location.state, form])


	

	const onFinishFailed = (errorInfo) => {
	    console.log('Failed:', errorInfo);
	};
	const onFinish = async (values) => {
		const reqOptions = {
	        method: "PUT",
	        headers: {
	            "Content-Type": "application/json",
	            Accept: "application/json",
	        },
	        body: JSON.stringify(values),
	    };
		await fetch("https://usercrud-api.herokuapp.com/api/update/" + location.state.user.id + "/", reqOptions).then(() => history.push('/'));
	    // const data = await response.json();
	    // history.push("/");
	}
	return (
		<div style={{ width:'100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
			<Card
				hoverable
				style={{ width: 300 }}
				title="Edit User"
				align="center"
			>
				<Form form={form}
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
						<Input size="large" required  placeholder="Name" allowClear prefix={<UserOutlined />} />		      
					</Form.Item>

					<Form.Item
						name="email" 
						rules={[{ required: true, message: 'Please input your Email Address!' },{ type: 'email', message: 'The input is not valid E-mail!'},]}
					>
						<Input type="email" required size="large"  placeholder="Email Address" allowClear prefix={<UserOutlined />} />
					</Form.Item>
					<Form.Item
						name="phone_no" 
						rules={[{ required: true, message: 'Please input your Phone number!' }]}
					>
						<Input size="large" required  placeholder="Phone Number" allowClear prefix={<UserOutlined />} />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
						  Submit
						</Button>
					</Form.Item>
				</Form>
				
			</Card>
		</div>
	)
}

export default EditUser