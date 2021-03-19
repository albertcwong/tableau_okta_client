import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import UserList from './components/UserList'

export const socket = io('https://elsa408.asuscomm.com:5000')

function App() {
  return (
    <div>
      <h1>Users</h1>

      <div className="App">
        <UserList></UserList>
      </div>
    </div>
  );
}

export default App;
