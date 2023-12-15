import {useState,useEffect} from 'react'
import background from '../Assets/background.jpg'
import './Header.css'
import {Navbar} from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';


function Header() {
  // const [isPending,setIsPending] = useState(true);
  // useEffect(()=>{
  // setTimeout(()=>{
  // setIsPending(false);
  // },10000)
  // },[])

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    <p>successfuly login</p>
    navigate('/signup');
  };

  return (
    <div className='Header__container ' id='Home'>
         <img src={background} alt='background image'/>
         <div class="color-overlay"></div>
            <div className='header__contents'>
              <h1 className='edumax'>Edu Max</h1>
              <br></br>
              <h1 className='empowering'>Empowering High School Students for Academic Success</h1>
              <p>"Success is the sum of small efforts repeated day in and day out." <span>- Robert Collie</span></p>
              {/* {isPending && <h1 >Loading.....</h1>} */}

            <button onClick={handleGetStartedClick}>Get Started</button>
         
         </div>
    </div>
  )
}

export default Header

