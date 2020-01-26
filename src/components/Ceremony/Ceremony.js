import React from 'react';

export default function Events() {
  return (
    <div className='welcome-text'>
      <div className='welcome-header-text'>CUZ WE'RE DOING IT. AGAIN!</div>
      <div className='event-white-date'>CEREMONY</div>
      <div className='event-gold-date'>
        <div>Sept 5, 2020 | 4 PM | English Garden, Munich</div>
      </div>
      <div className='welcome-text-paragraph'>
        We picked a special spot in the English Garden to hold our ceremony.
        Check back here closer to the date to find out more details.
      </div>
      <div className='event-white-date'>CELEBRATION</div>
      <div className='event-gold-date'>
        <div>
          Sept 5, 2020 | 6 PM |{' '}
          <a
            href='https://goo.gl/maps/t1n1QkwV4g3Jgd329'
            rel='noopener noreferrer'
            style={{ color: '#bbb082' }}
            target='_blank'
          >
            Seehaus
          </a>
        </div>
      </div>
      <div className='welcome-text-paragraph-thanks'>
        After the ceremony, we will get the party started at Seehaus located
        directly by the lake in the middle of the English Garden. Be ready to
        enjoy a delicious dinner and yummy drinks.
        <div className='welcome-text-paragraph'>
          Don’t forget to bring comfy shoes so we can party all night long!
        </div>
      </div>
    </div>
  );
}
