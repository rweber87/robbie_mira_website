import React from 'react';

export default function Travel() {
  return (
    <div className='welcome-text'>
      <div className='event-gold-date'>
        <div>Closest Airport</div>
      </div>
      <div className='event-white-date'>
        <div>Munich (MUC) Franz-Josef-Strauss Flughafen</div>
      </div>
      <div className='welcome-text-paragraph'>
        (reachable via public transport in approx 45 min)
      </div>
      <div className='event-gold-date'>
        <div>Getting around the city</div>
      </div>
      <div className='welcome-text-paragraph-thanks'>
        Munich has a great public transportation system that can get you to all
        the important places.
      </div>
      <div className='welcome-text-paragraph-thanks'>
        <a
          className='events-href'
          href='https://www.mvv-muenchen.de/en/index.html'
          style={{ color: 'white' }}
        >
          Here
        </a>{' '}
        you can find all sorts of useful information
      </div>
      <div className='welcome-text-paragraph'>
        (i.e. ticket prices, maps for trains, buses, and trams)
      </div>
      <div className='welcome-text-paragraph'>
        But of course, car rentals are also an option. If you need assistance
        here please reach out.
      </div>
      <div className='welcome-text-paragraph'>
        If you are planning to visit other cities within Germany or Europe by
        train
        <a
          className='events-href'
          href='https://www.bahn.com/en/view/index.shtml'
          style={{ color: 'white' }}
        >
          this
        </a>{' '}
        page is where you find what you need.
      </div>
      <div className='welcome-text-paragraph-thanks'>
        If you need a cab you can use uber or the city’s regular cab service.
      </div>
      <div className='welcome-text-paragraph-thanks'>
        Here are some phone numbers to call a cab:
      </div>
      <div className='welcome-text-paragraph-thanks'>
        {`Taxi AG +49 89 19410`}
      </div>
      <div className='welcome-text-paragraph-thanks'>
        {`IsarFunk +49 89 450 540`}
      </div>
    </div>
  );
}
