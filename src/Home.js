import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './App.css';
import Menu from './components/Menu/Menu';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='header'>
          <Menu />
        </div>
      </div>
    );
  }
}

export default Home;
