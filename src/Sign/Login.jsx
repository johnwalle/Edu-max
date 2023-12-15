import React, { useState,useRef,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Login.css';
import '../Components/Navbar/Navbar.css'
import logo from  '../Components/Assets/logo.jpg'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef= useRef(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleEmailChange = (e) =>{
  setEmail(e.target.value);
}

  useEffect(()=>{
    emailRef.current.focus();
  },[]);

 

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
  
    if (!email || !password ) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }
    
    
    navigate('/maincontainer');
  };

  return (
    <div className="login-container signin-container">
    <div className='signUp_contents'>
      <form onSubmit={handleLogin}>
        <div className="form-group">
             <div className='img__container'>
                <img className='logo__img' src={logo} alt="edumax" />
             </div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='test@gmail.com'
            ref={emailRef}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Test@1234#'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button  className='Signsubmit' type="submit">Login</button>
          <div id="signup__request">
              <p className='dont__acct'>Don't have an account yet?</p>
              <p className='signup-req'><Link className='createAccount' to="/signup">Sign up</Link></p>
          </div>
    
       
        {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

      </form>
      </div>   

    </div>
  );
}

export default Login;