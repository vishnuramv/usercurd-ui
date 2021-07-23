import './App.css';
import UserList from './Components/UserList'
import UserDetails from './Components/UserDetails'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";





function App() {
	
	return (
		<Router>
	        <Switch>
				<Route exact path="/" component={UserList} />
				<Route exact path="/view" component={UserDetails} />
				<Route exact path="/add" component={AddUser} />
				<Route exact path="/edit" component={EditUser} />
	        </Switch>
      	</Router>
	);
}

export default App;
