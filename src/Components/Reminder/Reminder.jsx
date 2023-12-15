import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Resources/Resources.css'
import './Reminder.css'
import reminder from '../Assets/reminder.jpg'
import todolist from '../Assets/todolist.jpg'
import calendar from'../Assets/calendar.jpg'


const Reminder = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };


  return (
    <div className='Resource__container Reminder' id='Reminder'>
      <h1 className='resourcetitle'>Reminder Assistant</h1>
      <div className='resource__contents reminder-types'>
                  <div className="topthree">
                  <div className='first__content content-box box1'>
                    <img src={todolist} alt='' />
                    <h1><span></span>TO-DO-List</h1>
                    <p className='paragraph'>Keep track of  upcoming tasks and deadlines with our integrated to-do list feature.</p>
                   </div>
          <div className='second__content content-box box1'>
               <img src={calendar} alt='' />
               
                <h1><span></span>Calendar</h1>
                <p className='paragraph'>View all of your upcoming assignmnets and events in one convenient place.</p>
                <p>
                </p>

          </div>  
                  </div>
                   <div className='third__content content-box box1'>
                   <img src={reminder} alt='' />

                    <h1><span></span>Reminder</h1>
                    <p className='paragraph'>Get notification for upcoming deadlines, events , and tasks. Never miss an important date again.</p>
                    
                     
                       
                   </div>
           </div>
           <h3 className='ready-get'>Ready to get started?</h3>
           <div className='getstarted'>
              <button onClick={handleGetStartedClick} className='reminder-button'>Get Started</button>    
           </div>
       </div>
  )
}

export default Reminder
