import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='homepage-view'>
        <div>
          <header className='std-header'>SAVE OUR DATE</header>
        </div>
        <div className='top-border-line'></div>
        <div>
          <p className='std-subheader'>CUZ WE'RE DOING IT. AGAIN.</p>
        </div>
        <div className='bottom-border-line'></div>
        <div className='date'>
          <div className='month-year'>SEPT</div>
          <div className='left-border-line'></div>
          <div className='day'>05</div>
          <div className='right-border-line'></div>
          <div className='month-year'>2020</div>
        </div>
        <div className='location'>
          MUNICH, GERMANY
        </div>
        <div className='invite-text'>FORMAL INVITATION TO FOLLOW</div>
        <div className='stay-tuned-text'>STAY TUNED - MORE INFO COMING SOON!</div>
      </div>
    );
  }
}

export default App;
