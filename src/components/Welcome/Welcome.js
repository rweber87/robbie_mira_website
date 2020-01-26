import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome-text'>
      <div className='welcome-header-text'>DEAR FRIENDS AND FAMILY,</div>
      <div className='welcome-text-paragraph'>
        Bald ist es soweit! :) The big day is approaching and we can‘t wait to
        celebrate with all of you!
      </div>
      <div className='welcome-text-paragraph-thanks'>
        Everyone traveling to Munich for this event: YOU ROCK!!!
      </div>
      <div className='welcome-text-paragraph'>
        {`Thank you so much for making this possible!`} &#10084;
      </div>
      <div className='welcome-text-paragraph'>
        Our website includes a lot of information that will help you plan your
        trip. But if something is missing, please do not hesitate to reach out.
        We recommend that you book your flights and hotels as soon as possible.
      </div>
      <div className='welcome-rsvp-text'>Step one: RSVP! :-)</div>
      <div className='welcome-text-paragraph'>
        For our preparations, we need a headcount. Please be sure to navigate to
        the RSVP page and let us know if we can count you in (kindly reply by
        <span className='events-reserve-date'> February 23, 2020</span>)
      </div>
      <div className='welcome-rsvp-text'>
        Step two: Check out other to-do’s!
      </div>
      <div className='welcome-text-paragraph'>
        We pre-planned 3 little events for the days leading up to the wedding
        that might tickle your fancy. Navigate to the ACTIVITIES page for more
        info! And be sure to let us know if you want us to count you in.
      </div>
    </div>
  );
}
