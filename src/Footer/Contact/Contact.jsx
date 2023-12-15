import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (

    <div className='contactus' id='contact'>
      <h1>Contact us</h1>
      <div className='contact__contents'>
      <div className='phone padding'>
        <p>Phone</p>
         <FontAwesomeIcon icon={faPhone} className='icon' />
          <span>+251  953231087</span>
        </div>

        <div className='email padding'>
        <p>Email</p>

        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <span>leojo1627@gmail.com</span>
         
        </div>
        <div className='location padding'>
        <p>location</p>

        <FontAwesomeIcon icon={faMapMarker} className='icon'/>
          <span>Addis Ababa, Ethiopia</span>
        
         
        </div>
        
      </div>
      <div className='social__media'>

<h3>We are in social media</h3>
<div className='media__links'>
<a href='https://t.me/john1627'><FontAwesomeIcon icon={faTelegram} className='social__iocns'  />
 </a>
< a href='#'><FontAwesomeIcon icon={faInstagram}  className='social__iocns'/>
</a>
</div>

</div>
       
       
    </div>
  )
}

export default Contact
