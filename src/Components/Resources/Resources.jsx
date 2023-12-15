import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className='Resource__container' id='Resources'>
      <h1 className='resourcetitle'>The Resource Center</h1>
      <p className='title'>Our resource center provides a one-stop-shop for high school students. From study guides to inspirational videos, you will find everything you need to succeed.</p>
      <div className='resource__contents'>
        <div className="topthree">
          <div className='first__content content-box'>
            <h1><span>&#128218;</span>Textbooks</h1>
            <p>Access textbooks that are fundamental learning resources that provide structured and organized content on various subjects.</p>
          </div>
          <div className='second__content content-box'>
            <h1><span>&#128214;</span>Study Guides</h1>
            <p>Access comprehensive study guides for a variety of subjects, designed to help you prepare for exams and excel in your classes.</p>
          </div>
        </div>
        <div className='third__content content-box'>
          <h1><span>&#128221;</span>Matric Exams</h1>
          <p>Offering a comprehensive collection of past exam papers with detailed solutions, subject-specific study materials, and mock exams.</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;