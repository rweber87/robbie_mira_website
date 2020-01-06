import React from 'react';
import LandingImg from '../../assets/images/landing_page_img.jpg';
import LandingImgMobile from '../../assets/images/landing_page_img_3.jpg';

export default function HomeScreen(props) {
  const { closeHomeScreen, homeScreenDisplayed } = props;

  return (
    <div
      onClick={() => {
        closeHomeScreen();
      }}
    >
      <img
        src={window.innerWidth > 411 ? LandingImg : LandingImgMobile}
        style={{
          display: homeScreenDisplayed ? 'block' : 'none',
          height: 'auto',
          position: 'fixed',
          width: '100%'
        }}
      />
      <div className='home-screen-text'>
        <div className='std-header'>ROBBIE & MIRA</div>
        <div className='date'>
          <div className='month-year'>SEPT</div>
          <div className='left-border-line'></div>
          <div className='day'>05</div>
          <div className='right-border-line'></div>
          <div id='year' className='month-year'>
            2020
          </div>
        </div>
      </div>
    </div>
  );
}
