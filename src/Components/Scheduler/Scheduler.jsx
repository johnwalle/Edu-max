import React from 'react'
import '../Resources/Resources.css'
import './Scheduler.css'


const Scheduler = () => {
  return (
    <div className='Resource__container scheduler' id='Scheduler'>
      <h1 className='resourcetitle'>Study Schedule Planner</h1>
      <p className='title'>Our Study Schedule Planner will help you manage your workload and keep you track. Use it to prioritize your assignmnets and manage your time effectively.</p>
      <div className='resource__contents'>
                  <div className="topthree">
                  <div className='first__content content-box'>
                    <h1><span></span>Customizable Schedule</h1>
                    <p>Access Textbooks that are fundamental learning resources that provide structured and organized content on various subjects.</p>
                   </div>
          <div className='second__content content-box'>
                <h1><span></span>Track Your Progress</h1>
                <p>
                  Use the app to track your progress on assignmnets. Check off completed tasks and monitor your progress in real-time.
                </p>

          </div>  
                  </div>
                   <div className='third__content content-box'>
                    <h1><span></span>Set Priorities</h1>
                    <p>
Assign each assignment a level of priority. form "Must DO" to "Low priority". The app will factor in priority when scheduling and help ensure you get everything done on time.                   </p>
                       
                   </div>
           </div>
       </div>
  )
}

export default Scheduler
