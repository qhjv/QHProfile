import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import Signin from './components/auth/signin';
import '../src/asset/css/style.css'
import Router from './router/router';
import Dashboard from "./features/dashboard/dashboard"

function App() {
  const [user, setUser] = useState('');
    const userState=()=>{
        const data= localStorage.getItem('adminUser');
        const us = data !== null ? JSON.parse(data):null
        setUser(us)
      }
    useEffect(() => {
        userState()
    }, [])
  return (
    <div className="App">
      <div className="fullPage">
      {user !== true ? (
        <Signin loggedIn={(user)=> setUser(user)}/>
      ):(
        <Dashboard setUserState={()=>setUser(null)}/>
        // <Router></Router>
      )}
      </div>
    </div>
  );
}

export default App;
