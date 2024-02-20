import React from 'react';
import './SCSS/LoginSignup.scss';

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup__container">
        <h1>Sign Up</h1>
        <div className="loginsignup__fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup__login">
          Already have an account? 
          <span>Login here</span>
        </p>
        <div className="loginsignup__agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms fo use & privacy palicy.</p>
        </div>
      </div>
    </div>
  )
}
