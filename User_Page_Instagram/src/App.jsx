import React,{useState } from 'react';
import './App.css';
import logo from './assets/instagram.png'



const App = () => {
  const[login,setlogin] = useState(true)
  const loginSwitch = () =>{
    setlogin(!login)
  }
 return (
    <div id="Container">
      <div id = "user">
        <img src= {logo} alt="Insta logo" />
        
        <input hidden={login} type="text" name="" placeholder='Mobile Number, or email' /> 
        <input hidden={login} type="text" name="" placeholder='Full Name' />
        <input type="text" name="" placeholder="Phone number, username, or email" />
        <input type="text" name="" placeholder="Password" />

        <button>{ login?"Sign In":"Sign UP"}</button>
        <div id="footer">
          {login?"Don't have account?":"have an Account? "}
          <span onClick={loginSwitch}>{login?"Sign Up":"Login In"}</span>

        </div>



      </div>
    </div>
  )
}

export default App