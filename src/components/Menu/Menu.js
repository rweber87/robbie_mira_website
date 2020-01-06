import React from 'react';
import { Link } from 'react-router-dom';

export function Menu(props) {
  const { changePhoto, images, selectedMenuItem } = props;
  console.log('hey', selectedMenuItem);
  return (
    <div className='menu'>
      <Link
        className='menu-item'
        to='/welcome'
        onClick={() => changePhoto(images.image1, 'welcome')}
      >
        WELCOME
      </Link>
      <Link
        className='menu-item'
        to='/events'
        onClick={() => changePhoto(images.image2, 'events')}
      >
        EVENTS
      </Link>
      <Link
        className='menu-item'
        to='/travel'
        onClick={() => changePhoto(images.image3, 'travel')}
      >
        TRAVEL
      </Link>
      <Link
        className='menu-item'
        to='/lodging'
        onClick={() => changePhoto(images.image4, 'lodging')}
      >
        LODGING
      </Link>
      <Link
        className='menu-item'
        to='/rsvp'
        onClick={() => changePhoto(images.image5, 'rsvp')}
      >
        RSVP
      </Link>
      <Link
        className='menu-item'
        to='/qanda'
        onClick={() => changePhoto(images.image6, 'qanda')}
      >
        Q & A
      </Link>
    </div>
  );
}

export default Menu;
