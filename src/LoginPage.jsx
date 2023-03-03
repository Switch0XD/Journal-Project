import React, { useState } from 'react';
import logo from './img/logo512.png';
import MyCaptcha from './Captcha';

import './LoginPage.css';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !captcha) {
      setError('All fields are required');
    } else if (captcha !== 'correct_captcha') {
      setError('Incorrect captcha entered');
    } else {
      setError('');
      // perform login function here
    }
  };

  return (
    <> <div className="loginNav">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </nav>

      <div class="TitleLogin">
        <center> <h2 class="fw-bold">Journal Portal Login</h2></center>
      </div>

    </div>

      {/* Login page form */}
      <center>
        <div className="LoginForm">
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={error ? 'has-error' : ''} placeholder='Enter Username ' />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? 'has-error' : ''} placeholder='*******' />
            </label>
            <br />
            <label>
              Captcha:
              <input
                type="text"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className={error ? 'has-error' : ''} placeholder='Enter Captcha' />
              <div className='captcha'>
                <MyCaptcha /></div>


            </label>
            <br />
            <button type="submit">Login</button>
            <br />
            <div className={`error-message ${error ? 'show' : 'hide'}`}>{error}</div>
            <br />
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          </form>
        </div>
      </center>
      <center><footer >
        Copyright © 2023 Software Development Cell, VIT, Bhopal-466 114.</footer></center>
    </>


  );
}

export default LoginPage;
