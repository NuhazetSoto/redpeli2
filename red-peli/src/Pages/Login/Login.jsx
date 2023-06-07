import React from 'react'
import './Login.css'
import Header from '../../Components/Header/Header'
;
function Login() {
  return (
    <>
     
      <div className="login">
        <div className="form">
          <input type="text" placeholder="example@email.com" />
          <input type="text" placeholder="password" />
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login