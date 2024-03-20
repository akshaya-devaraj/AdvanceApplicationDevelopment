import React, { useRef, useState } from 'react'
import '../../assets/css/Login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/UserSlice';

function Login() {
  const nav=useNavigate();
  const[username,setUsername]= useState('');
  const[password,setPassword]=useState('');
  const dispatch=useDispatch();
  const sub = (e) => {
    e.preventDefault();

  };
  const register=()=>{
    nav("/register");
  }
  const formHandler=async(event)=>
  {
    event.preventDefault();
    try{ if (username === "admin" && password === "admin@123") {
      dispatch(login(username));
      nav("/admindash");
    }
    else if (username.length!=0 && password.length!=0 &&password.length>8) {
      dispatch(login(username));
      nav("/");
    }}
    catch(error)
    {
      //alert("Incorrect Username and Password.");
    }
    
  
  }
  return (
    <>
      <div className='login-container'>
      <form class="form-login1" type="submit" onSubmit={sub} onClick={formHandler}>
      <div class="login1">
      <center>
      <h2 style={{ fontSize: "50px" }}>Login</h2>
      </center>
                <label for="email">Username</label>
                <div class="input-email">
                  <input
                    type="text"
                    onChange={e=>setUsername(e.target.value)}
                    placeholder="   Enter your Username"
                    required
                  />
                </div>
                <br />

                <label for="password">Password</label>
                <div class="input-password">
                  <input
                    type="password"
                    onChange={e=>setPassword(e.target.value)}
                    minLength={8}
                    maxLength={16}
                    placeholder="   Enter your Password"
                    required
                  />
                </div>
                <button type="submit"> Login</button>
                <h5 onClick={register}>New? Click Here..</h5>
                </div>
                </form>
      </div>
    </>
  )
}

export default Login