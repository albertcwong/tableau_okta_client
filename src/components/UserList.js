import { socket } from '../App';
import UserDisplay from './UserDisplay';
import axios from 'axios';
import React, {useEffect} from 'react';

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    socket.on('userAddedResponse', (resp) => {
      console.log(`adding user to ui ${resp}`)
      const users = this.state.users;      
      const userAdded = resp.data.user;
      users.push(userAdded)
      
      this.setState({ users })
    });

    socket.on('userRemovedResponse', (resp) => {
        console.log(`removing user from ui ${resp}`)
        const users = this.state.users;      
        const userRemoved = resp.data.user;
        const updatedUsers = users.filter(i => i.id !== userRemoved.id)
        
        this.setState({ users: updatedUsers })
      });    

    axios.get(`https://elsa408.asuscomm.com:5000/users`)
      .then(res => {
        const users = res.data.user;
        this.setState({ users });
      })
  }

  render() {
      return (
          <div>
              { this.state.users.map(user => <UserDisplay key={user.id} name={user.name} id={user.id} lastLogin={user.lastLogin}></UserDisplay>)}
          </div>
      )
  }
} 