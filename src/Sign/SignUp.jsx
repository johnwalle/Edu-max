import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import logo from  '../Components/Assets/logo.jpg'


function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const fullNameRef = useRef(null);

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/;

    if (!fullName || !email || !password) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }
    if (!fullName.includes(' ')) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!regex.test(password)) {
      setErrorMessage('Password must contain at least one capital letter and be alphanumeric with a minimum length of 8 characters.');
      return;
    }
    if (!email || !password ) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }
    
    navigate('/maincontainer');
  };

  return (
    <div className="signin-container">
      <div className="signUp_contents">
        <form className='' onSubmit={handleSignIn}>
          <div className="form-group">
          <div className='img__container'>
                <img className='logo__img' src={logo} alt="edumax" />
             </div>
             <h1 className="welcome">Welcome to Edumax !</h1>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              placeholder="John Smith"
              ref={fullNameRef}
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="test@gmail.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Test@1234#"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="Signsubmit" type="submit">
            Sign Up
          </button>
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;