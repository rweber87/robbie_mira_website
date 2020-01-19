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
        to='/wedding/welcome'
        onClick={() => {
          changePhoto(images.welcome, 'welcome');
          closerHamburgerMenu();
        }}
      >
        Welcome
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'events' ? 'active' : 'inactive'}`
        }
        to='/wedding/events'
        onClick={() => {
          changePhoto(images.events, 'events');
          closerHamburgerMenu();
        }}
      >
        Events
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'travel' ? 'active' : 'inactive'}`
        }
        to='/wedding/travel'
        onClick={() => {
          changePhoto(images.travel, 'travel');
          closerHamburgerMenu();
        }}
      >
        Travel
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'lodging' ? 'active' : 'inactive'}`
        }
        to='/wedding/lodging'
        onClick={() => {
          changePhoto(images.lodging, 'lodging');
          closerHamburgerMenu();
        }}
      >
        Lodging
      </Link>
      <Link
        className={
          'menu-item ' +
          `${selectedMenuItem === 'rsvp' ? 'active' : 'inactive'}`
        }
        to='/wedding/rsvp'
        style={{
          paddingTop: '13px'
        }}
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
        to='/wedding/qanda'
        style={{
          paddingTop: '10px'
        }}
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
