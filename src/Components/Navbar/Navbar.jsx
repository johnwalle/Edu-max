import React ,{useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.jpg';

const Menu = () => (
  <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#Resources'>Resources</a></p>
    <p><a href='#Scheduler'>Scheduler</a></p>
    <p><a href='#Reminder'>Reminder</a></p>
    <p><a href='#contact'>Contact us</a></p>

  </>
);

function Navbar() {
  const navigate = useNavigate();

  

  const handleGetStartedClick = () => {
    navigate('/signup');
  };
  


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar__container'>
      <div className='navbar__leftcontents'>
        <img src={logo} alt='edumax logo' />
        <h3>EDUMAX</h3>
      </div>
      <div className='navbar__rightcontents'>
        <div className='navbar__links'>
          <p><a href='#Home'>Home</a></p>
          <p><a href='#Resources'>Resources</a></p>
          <p><a href='#Scheduler'>Scheduler</a></p>
          <p><a href='#Reminder'>Reminder</a></p>
          <p><a href='#contact'>Contact</a></p>
        </div>
        <div className='navbar__signlog'>

        <p><Link className='login' to="/Login">Login</Link></p>
          <button className='signup' onClick={handleGetStartedClick}>Sign up</button>
          <div className="menu-bar-container">
            <button onClick={toggleMenu} className="menu-bar-icon">
              {menuOpen ? (
                <FaTimes  className='menu_icon'/>
              ) : (
                <FaBars className='menu_icon'/>
              )}
            </button>
              {menuOpen && (
              <div className={`menu-items-container ${menuOpen ? 'menu-open' : ''}`}>
                <Menu />
              </div>
                         )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;