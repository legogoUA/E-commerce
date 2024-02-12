import React from 'react';
import './Hero.scss';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export const Hero = () => {
  return (
    <div className='hero'> 
      <div className="hero__left">
        <h2>NEEW AEEICALS ONLY</h2>
        <div>
          <div className="hero__hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero__latest-btn">
          <div>Latest Collections</div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
      <div className="hero__right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}
