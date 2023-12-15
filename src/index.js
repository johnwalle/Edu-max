import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Sign/Login.jsx';
import SignUp from './Sign/SignUp.jsx';
// import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Main from './MainContainer/Main.js'
import App from './App.js';
import './index.css';
import Rresource  from './MainContainer/Rresource/Rresource.jsx';
import Rreminder from   './MainContainer/Rreminder/Rreminder.jsx';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/maincontainer" element={<Main />} />
      <Route path="/Resources" element={<Rresource />} />
      <Route path="/Reminder" element={<Rreminder/>} />

      
    </Routes>
  </Router>,
  document.getElementById('root')
);