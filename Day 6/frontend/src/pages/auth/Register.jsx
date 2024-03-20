import React, { useRef } from 'react'
import '../../assets/css/Register.css'
function Register() {
  const phonenumber=useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const sub = (e) => {
    e.preventDefault();
    alert(username.current.value);
    alert(phonenumber.current.value);
    console.log(password.current.value);  
      };

  return (
    <>
    <div className='register-container'>
      <form class="form-register1" type="submit" onSubmit={sub}>
      <div class="register1">
      <center>
      <h2 style={{ fontSize: "50px" }}>Register</h2>
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
                <label for="number">PhoneNumber</label>
                <div class="input-phonenumber">
                  <input
                    type="text"
                    ref={phonenumber}
                    maxLength={10}
                    placeholder="   Enter your phonenumber"
                    required
                  />
                </div>
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
                <button type="submit"> Register</button>
                </div>
                </form>
      </div>
    </>
  )
}

export default Register