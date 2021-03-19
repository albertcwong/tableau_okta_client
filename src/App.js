import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import UserList from './components/UserList'

export const socket = io('https://elsa408.asuscomm.com:5000')

function App() {
  return (
    <div>
      <div className="App-header">Tableau Server Users</div>

      <div className="App">
        <UserList></UserList>
      </div>
    </div>
  );
}

export default App;
