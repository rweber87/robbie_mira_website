import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Events from './components/Events/Events';
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Images, { imagesFunction } from './assets/images/';
import Lodging from './components/Lodging/Lodging';
import Menu from './components/Menu/Menu';
import Photo from './components/Photo/Photo';
import Qanda from './components/Qanda/Qanda';
import Rsvp from './components/Rsvp/Rsvp';
import SaveTheDate from './components/SaveTheDate/SaveTheDate';
import Travel from './components/Travel/Travel';
import Welcome from './components/Welcome/Welcome';

class App extends Component {
  constructor(props) {
    super(props);

    let shouldImageDisplay = window.location.pathname.indexOf('/wedding/') > -1;
    let imageDisplayed = window.location.pathname.split('/wedding/')[1];

    this.state = {
      hamburgerWidth: '0px',
      homeScreenDisplayed: shouldImageDisplay,
      imageSelected: imagesFunction(Images, imageDisplayed),
      selectedMenuItem: imageDisplayed ? imageDisplayed : 'welcome'
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

  openHomeScreen = () => {
    this.setState({ homeScreenDisplayed: true });
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
        <div>
          {homeScreenDisplayed && (
            <div className='header'>
              <Photo imageSelected={imageSelected} />
              {window.innerWidth > 420 ? (
                <Menu
                  changePhoto={this.changePhoto}
                  images={Images}
                  selectedMenuItem={selectedMenuItem}
                />
              ) : (
                <div>
                  <HamburgerMenu
                    changePhoto={this.changePhoto}
                    closerHamburgerMenu={this.closerHamburgerMenu}
                    hamburgerWidth={hamburgerWidth}
                    images={Images}
                    selectedMenuItem={selectedMenuItem}
                  />
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
                </div>
              )}
            </div>
          )}
          <div>
            <Switch>
              <Route exact path='/' render={() => <SaveTheDate />} />
              <Route
                exact
                path='/wedding'
                render={() => (
                  <HomeScreen openHomeScreen={this.openHomeScreen} />
                )}
              />
              <Route exact path='/wedding/welcome' render={() => <Welcome />} />
              <Route exact path='/wedding/events' render={() => <Events />} />
              <Route exact path='/wedding/travel' render={() => <Travel />} />
              <Route exact path='/wedding/lodging' render={() => <Lodging />} />
              <Route exact path='/wedding/rsvp' render={() => <Rsvp />} />
              <Route exact path='/wedding/qanda' render={() => <Qanda />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
