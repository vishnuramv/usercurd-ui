import { Button, Table, Typography, Space, Card, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";




const UserList = () => {
	const history = useHistory();
	const { Title } = Typography;

	const columns = [
	  {
		title: 'Id',
		dataIndex: 'id',
		key: 'id',
		align: 'center',
	  },
	  {
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	    sorter: (a, b) => a.name - b.name,
	    responsive: ['xs','sm','md','lg','xl'],
		align: 'center',

	  },
	  {
		title: 'Action',
		key: 'action',
		render: (text, record) => (
		  <Space size="large" wrap>
			<Button type="link" onClick={async () => {
	            history.push("/view", {
	              user: {"id":record.id,"name":record.name,"phone_no":record.phone_no,"email":record.email},
	            });
	          }}>View</Button>
			<Button type="link" onClick={async () => {
	            history.push("/edit", {
	              user: {"id":record.id,"name":record.name,"phone_no":record.phone_no,"email":record.email},
	            });
	          }}>Edit</Button>
			<Button type="link" danger onClick={() => deleteUser(record.id)}>Delete</Button>
		  </Space>
		),
		responsive: ['xs','sm','md','lg','xl'],
		align: 'center',

	  },
	];

	const deleteUser = async (id) => {
		await fetch("https://usercrud-api.herokuapp.com/api/delete/" + id, {method: "Delete",}).then(()=> fetchData());
	}

	const [userData, setUserData] = useState([])

	const fetchData = async () => {
	  	const reqOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		const response = await fetch("https://usercrud-api.herokuapp.com/api/view/", reqOptions);
		const data = await response.json();
		setUserData(data.map((user,idx) => ({...user, key:idx})))
		// if (userData) {
		// 	dispatch({
		// 		type: "SET_USER",
		// 		users: userData,
		// 	})
		// } else {
		// 	dispatch({
		// 		type: "SET_USER",
		// 		users: null,
		// 	})
		// }
	}
	useEffect(() => {
		fetchData();
	},[setUserData])

	return (
		<>
			<Row style={{paddingTop: '3%'}} justify="space-around">
				<Col sm={4} md={6} lg={14} xl={16}><Title>USER LIST</Title></Col>
				<Col sm={4} md={2} lg={2} xl={2} align="center">
					<Button 
						onClick={async () => history.push("/add")} 
		        		type="primary"
		        	>Add User</Button>
		        </Col>
			</Row>
			<Row style={{marginTop: '2%'}} justify="space-around" align="middle">
				<Col span={20} sm={22}>
				 	<Card bordered={false} style={{width: '100%'}}>
						<Table dataSource={userData} pagination={false} bordered columns={columns} />
				 	</Card>
				</Col>
	    	</Row>
    	</>
	)
}

export default UserList