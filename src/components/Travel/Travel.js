import React from 'react';

export default function Travel() {
  return (
    <div className='welcome-text'>
      <div className='welcome-header-text'>CLOSEST AIRPORT</div>
      <div className='event-white-date'>Munich (MUC)</div>
      <div className='event-gold-date'>Franz-Josef-Strauss Flughafen</div>
      <div className='welcome-text-paragraph'>
        (45 minutes to Munich city center by public transport)
      </div>
      <div className='dotted-line-separator'></div>
      <div className='welcome-header-text'>GETTING AROUND THE CITY</div>
      <div className='welcome-text-paragraph-thanks'>
        Munich has a great public transportation system that can get you to all
        the important places.
      </div>
      <div className='welcome-text-paragraph'>
        Here you can find all sorts of useful information (i.e. ticket prices,
        maps for trains, buses, and trams)
      </div>
      <div className='welcome-text-paragraph-thanks'>
        Of course car rentals are also an option. Or you can use car sharing
        services such as DriveNow or Car2go.
      </div>
      <div className='welcome-text-paragraph'>
        If you need a cab you can use uber or the city’s regular cab service.
        Here are some phone numbers to call a cab:
      </div>
      <div className='welcome-text-paragraph-thanks'>
        {`Taxi AG +49 89 19410`}
      </div>
      <div className='welcome-text-paragraph'>{`IsarFunk +49 89 450 540`}</div>
      <div className='dotted-line-separator'></div>
      <div className='welcome-header-text'>VISITING OTHER PLACES</div>

      <div className='welcome-text-paragraph-thanks'>
        If you are planning to visit other cities within Germany or Europe by
        train this
        <a
          className='events-href'
          href='https://www.mvv-muenchen.de/en/index.html'
          style={{ color: 'white' }}
        >
          {' '}
          page
        </a>{' '}
        is where you'll find what you need.
      </div>
    </div>
  );
}
