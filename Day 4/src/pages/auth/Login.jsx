import React, { useRef } from 'react'
import '../../assets/css/Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  const nav=useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const sub = (e) => {
    e.preventDefault();
    alert(username.current.value);
    console.log(password.current.value);
  };
  const register=()=>{
    nav("/register");
  }
  if(username!=null && password!=null)
  {
    nav("/");
  }
  return (
    <>
      <div className='login-container'>
      <form class="form-login1" type="submit" onSubmit={sub}>
      <div class="login1">
      <center>
      <h2 style={{ fontSize: "50px" }}>Login</h2>
      </center>
                <label for="email">Username</label>
                <div class="input-email">
                  <input
                    type="text"
                    ref={username}
                    placeholder="   Enter your Username"
                    required
                  />
                </div>
                <br />

                <label for="password">Password</label>
                <div class="input-password">
                  <input
                    type="password"
                    ref={password}
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