import { socket } from '../App'
	
export default class CreateNewUser extends React.Component {
	handleSubmit = event => {
   		event.preventDefault();
	    const user = {
   	    	displayName: this.state.displayName,
        	email: this.state.email,
    	};

	    axios.post(`https://elsa408.asuscomm.com:5000/users`, user).then(res => {
        	socket.emit('UserAdded', {'data' : {'user': user}})
   		})
	}
}