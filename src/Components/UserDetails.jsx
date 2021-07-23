import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Card, Button } from 'antd';

const UserDetails = ({ location }) => {
	const history = useHistory();
	const { Meta } = Card;
	const [user, setUser] = useState({});
	useEffect(() => {
	    setUser(location.state.user);
	}, [location.state.user]);
	return (
		<div style={{ width:'100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
			<Card
				hoverable
				style={{ width: 240 }}
				align="center"
				cover={<Avatar  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} style={{ color: '#f56a00', marginTop: '20px', backgroundColor: '#fde3cf' }}>{user.name}</Avatar>}
			>
				<Meta title={user.name} description={`Phone Number: ${user.phone_no}`} />
				<Meta description={`Email: ${user.email}`} />
				<Button type="primary" onClick={() => history.push('/')} style={{marginTop: "20px"}}>Home</Button>
			</Card>
		</div>
	)
}

export default UserDetails