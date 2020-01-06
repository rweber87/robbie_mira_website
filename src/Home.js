import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from './components/Events/Events';
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Images from './assets/images/';
import Lodging from './components/Lodging/Lodging';
import Menu from './components/Menu/Menu';
import Photo from './components/Photo/Photo';
import Qanda from './components/Qanda/Qanda';
import Rsvp from './components/Rsvp/Rsvp';
import Travel from './components/Travel/Travel';
import Welcome from './components/Welcome/Welcome';

import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerWidth: '0px',
      homeScreenDisplayed: true,
      imageSelected: Images.image1,
      selectedMenuItem: undefined
    };
  }

  changePhoto = (imageSelected, selectedMenuItem) => {
    this.setState({
      imageSelected,
      selectedMenuItem
    });
  };

  closerHamburgerMenu = () => {
    this.setState({ hamburgerWidth: '0px' });
  };

  openHamburgerMenu = hamburgerWidth => {
    this.setState({ hamburgerWidth });
  };

  closeHomeScreen = () => {
    this.setState({ homeScreenDisplayed: false });
  };

  render() {
    const {
      hamburgerWidth,
      homeScreenDisplayed,
      imageSelected,
      selectedMenuItem
    } = this.state;

    return (
      <div>
        {homeScreenDisplayed && (
          <HomeScreen
            closeHomeScreen={this.closeHomeScreen}
            homeScreenDisplayed={homeScreenDisplayed}
          />
        )}
        {!homeScreenDisplayed && (
          <div>
            <div className='header'>
              <Photo imageSelected={imageSelected} />
              {window.innerWidth > 411 ? (
                <Menu
                  changePhoto={this.changePhoto}
                  images={Images}
                  selectedMenuItem={selectedMenuItem}
                />
              ) : (
                <div>
                  <HamburgerMenu
                    changePhoto={this.changePhoto}
                    hamburgerWidth={hamburgerWidth}
                    images={Images}
                    closerHamburgerMenu={this.closerHamburgerMenu}
                  />
                  {!homeScreenDisplayed && (
                    <span
                      style={{
                        color: '#bbb082',
                        cursor: 'pointer',
                        fontSize: '34px',
                        position: 'absolute',
                        top: '150px',
                        left: `${window.innerWidth - 50}px`
                      }}
                      onClick={() => this.openHamburgerMenu(window.innerWidth)}
                    >
                      &#9776;
                    </span>
                  )}
                </div>
              )}
            </div>
            <div>
              <Switch>
                <Route exact path='/' render={() => <Welcome />} />
                <Route exact path='/welcome' render={() => <Welcome />} />
                <Route exact path='/events' render={() => <Events />} />
                <Route exact path='/travel' render={() => <Travel />} />
                <Route exact path='/lodging' render={() => <Lodging />} />
                <Route exact path='/rsvp' render={() => <Rsvp />} />
                <Route exact path='/qanda' render={() => <Qanda />} />
              </Switch>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
