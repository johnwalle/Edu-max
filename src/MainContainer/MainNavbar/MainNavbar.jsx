import React ,{useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../Components/Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Components/Assets/logo.jpg';
import './MainNavbar.css'

const Menu = () => (
  <>
    <p><Link target='_blank' to='/Resources'><span>&#128193;</span>Resources</Link></p>
    <p><Link to='/scheduler'><span>&#128197;</span>Scheduler</Link></p>
    <p><Link target='_blank' to='/Reminder'><span>&#128339;</span>Reminder</Link></p>

  </>
);

function MainNavbar() {

  
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
      <div className='navbar__rightcontents mainnavbar__rightcontents'>
        <div className='navbar__links mainnavbar__links'>
          <p><a href='#Resources'><span>&#128193;</span>Resources</a></p>
          <p><a href='#Scheduler'><span>&#128197;</span>Scheduler</a></p>
          <p><a href='#Reminder'><span>&#128339;</span>Reminder</a></p>
        </div>
        <div className='navbar__signlog'>

        
          <div className="menu-bar-container">
            <button onClick={toggleMenu} className="menu-bar-icon">
              {menuOpen ? (
                <FaTimes  className='menu_icon'/>
              ) : (
                <FaBars className='menu_icon'/>
              )}
            </button>
              {menuOpen && (
              <div className={`menu-items-container mainnavbar__cont ${menuOpen ? 'menu-open' : ''}`}>
                <Menu />
              </div>
                         )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;