import React from 'react';
import { Link } from 'react-router-dom';

export function Menu(props) {
  const { changePhoto, images, selectedMenuItem } = props;
  return (
    <div className='menu'>
      <div className='inner-menu'>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'welcome' ? 'active' : 'inactive'}`
          }
          to='/welcome'
          onClick={() => changePhoto(images.welcome, 'welcome')}
        >
          WELCOME
        </Link>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'thebigday' ? 'active' : 'inactive'}`
          }
          to='/thebigday'
          onClick={() => changePhoto(images.thebigday, 'thebigday')}
        >
          THE BIG DAY
        </Link>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'activities' ? 'active' : 'inactive'}`
          }
          to='/activities'
          onClick={() => changePhoto(images.activities, 'activities')}
        >
          ACTIVITIES
        </Link>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'travel' ? 'active' : 'inactive'}`
          }
          to='/travel'
          onClick={() => changePhoto(images.travel, 'travel')}
        >
          TRAVEL
        </Link>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'lodging' ? 'active' : 'inactive'}`
          }
          to='/lodging'
          onClick={() => changePhoto(images.lodging, 'lodging')}
        >
          LODGING
        </Link>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'rsvp' ? 'active' : 'inactive'}`
          }
          to='/rsvp'
          onClick={() => changePhoto(images.rsvp, 'rsvp')}
        >
          RSVP
        </Link>
        <Link
          className={
            'menu-item ' +
            `${selectedMenuItem === 'qanda' ? 'active' : 'inactive'}`
          }
          to='/qanda'
          onClick={() => changePhoto(images.qanda, 'qanda')}
        >
          Q & A
        </Link>
      </div>
    </div>
  );
}

export default Menu;
