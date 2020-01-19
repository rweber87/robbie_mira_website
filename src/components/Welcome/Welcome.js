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
      <div className='welcome-text-paragraph'>{`Thank you so much for making this possible! <3`}</div>
      <div className='welcome-text-paragraph'>
        We recommend that you book your flights and hotels as soon as feasibly
        possible. Our website includes a lot of information that will help you
        plan your trip. But if something is missing, please do not hesitate to
        reach out.
      </div>
      <div className='welcome-rsvp-text'>Step no1: RSVP! :-)</div>
      <div className='welcome-text-paragraph'>
        For our preparations, we need a headcount. Please be sure to navigate to
        the RSVP page and let us know if we can count you in (kindly reply by
        xx.xx.2020)
      </div>
      <div className='welcome-text-paragraph'>
        At this point, all of you should have received a formal invitation via
        mail.
      </div>
      <div className='welcome-text-paragraph'>
        If not, please reach out to us ASAP.
      </div>
    </div>
  );
}
