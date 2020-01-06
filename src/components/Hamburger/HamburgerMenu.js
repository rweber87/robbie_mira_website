import React from 'react';
import { Link } from 'react-router-dom';

export default function HamburgerMenu(props) {
  const { changePhoto, hamburgerWidth, images, closerHamburgerMenu } = props;

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
        className='menu-item'
        to='/welcome'
        onClick={() => {
          changePhoto(images.image1, 'welcome');
          closerHamburgerMenu();
        }}
      >
        Welcome
      </Link>
      <Link
        className='menu-item'
        to='/events'
        onClick={() => {
          changePhoto(images.image2, 'events');
          closerHamburgerMenu();
        }}
      >
        Events
      </Link>
      <Link
        className='menu-item'
        to='/travel'
        onClick={() => {
          changePhoto(images.image3, 'travel');
          closerHamburgerMenu();
        }}
      >
        Travel
      </Link>
      <Link
        className='menu-item'
        to='/lodging'
        onClick={() => {
          changePhoto(images.image4, 'lodging');
          closerHamburgerMenu();
        }}
      >
        Lodging
      </Link>
      <Link
        className='menu-item'
        to='/rsvp'
        style={{
          paddingTop: '13px'
        }}
        onClick={() => {
          changePhoto(images.image5, 'rsvp');
          closerHamburgerMenu();
        }}
      >
        RSVP
      </Link>
      <Link
        className='menu-item'
        to='/qanda'
        style={{
          paddingTop: '10px'
        }}
        onClick={() => {
          changePhoto(images.image6, 'qanda');
          closerHamburgerMenu();
        }}
      >
        Q&A
      </Link>
    </div>
  );
}
