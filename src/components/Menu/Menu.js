import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Photo from '../Photo/Photo';
import Images from '../../assets/images/';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenuItem: undefined,
      imageSelected: Images.image1
    };
  }

  render() {
    const { imageSelected } = this.state;
    return (
      <div>
        <Photo imageSelected={imageSelected} />
        <div className='menu'>
          <Link
            className='menu-item'
            to='/welcome'
            onClick={() =>
              this.setState({
                selectedMenuItem: 'welcome',
                imageSelected: Images.image1
              })
            }
          >
            Welcome
          </Link>
          <Link
            className='menu-item'
            to='/events'
            onClick={() =>
              this.setState({
                selectedMenuItem: 'events',
                imageSelected: Images.image2
              })
            }
          >
            Events
          </Link>
          <Link
            className='menu-item'
            to='/travel'
            onClick={() =>
              this.setState({
                selectedMenuItem: 'travel',
                imageSelected: Images.image3
              })
            }
          >
            Travel
          </Link>
          <Link
            className='menu-item'
            to='/lodging'
            onClick={() =>
              this.setState({
                selectedMenuItem: 'lodging',
                imageSelected: Images.image4
              })
            }
          >
            Lodging
          </Link>
          <Link
            className='menu-item'
            to='/rsvp'
            onClick={() =>
              this.setState({
                selectedMenuItem: 'rsvp',
                imageSelected: Images.image5
              })
            }
          >
            RSVP
          </Link>
          <Link
            className='menu-item'
            to='/qanda'
            onClick={() =>
              this.setState({
                selectedMenuItem: 'qanda',
                imageSelected: Images.image6
              })
            }
          >
            Q & A
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
