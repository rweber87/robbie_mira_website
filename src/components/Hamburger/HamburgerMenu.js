import React from 'react';
import { Link } from 'react-router-dom';

export default function HamburgerMenu(props) {
  const {
    changePhoto,
    closerHamburgerMenu,
    hamburgerWidth,
    images,
    selectedMenuItem
  } = props;

  return (
    <div id='mySidenav' className='sidenav' style={{ width: hamburgerWidth }}>
      <a
        className='closebtn'
        onClick={() => {
          closerHamburgerMenu();
        }}
      >
        &times;
      </a>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'welcome' ? 'active' : 'inactive'}`
        }
        to='/welcome'
        onClick={() => {
          changePhoto(images.welcome, 'welcome');
          closerHamburgerMenu();
        }}
      >
        WELCOME
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'thebigday' ? 'active' : 'inactive'}`
        }
        to='/thebigday'
        onClick={() => {
          changePhoto(images.thebigday, 'thebigday');
          closerHamburgerMenu();
        }}
      >
        THE BIG DAY
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'activities' ? 'active' : 'inactive'}`
        }
        to='/activities'
        onClick={() => {
          changePhoto(images.activities, 'activities');
          closerHamburgerMenu();
        }}
      >
        ACTIVITIES
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'travel' ? 'active' : 'inactive'}`
        }
        to='/travel'
        onClick={() => {
          changePhoto(images.travel, 'travel');
          closerHamburgerMenu();
        }}
      >
        TRAVEL
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'lodging' ? 'active' : 'inactive'}`
        }
        to='/lodging'
        onClick={() => {
          changePhoto(images.lodging, 'lodging');
          closerHamburgerMenu();
        }}
      >
        LODGING
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'rsvp' ? 'active' : 'inactive'}`
        }
        to='/rsvp'
        onClick={() => {
          changePhoto(images.rsvp, 'rsvp');
          closerHamburgerMenu();
        }}
      >
        RSVP
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'qanda' ? 'active' : 'inactive'}`
        }
        to='/qanda'
        onClick={() => {
          changePhoto(images.qanda, 'qanda');
          closerHamburgerMenu();
        }}
      >
        Q&A
      </Link>
    </div>
  );
}
