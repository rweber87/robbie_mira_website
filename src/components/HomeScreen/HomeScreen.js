import { Link } from 'react-router-dom';

import LandingImg from '../../assets/images/landing_page_img.jpg';
import LandingImgMobile from '../../assets/images/landing_page_img_3.jpg';

export default function HomeScreen(props) {
  const { openHomeScreen } = props;
  const tapToEnter = () => {
    if (window.innerWidth < 650) {
      return <div className='std-subtext'>(tap to enter)</div>;
    }
  };

  return (
    <div>
      <Link to='/welcome' onClick={() => openHomeScreen()}>
        <img
          alt=''
          src={window.innerWidth > 650 ? LandingImg : LandingImgMobile}
          style={{
            display: 'block',
            height: 'auto',
            position: 'fixed',
            width: '100%',
          }}
        />
        <div className='home-screen-text'>
          <div className='std-header'>ROBBIE & MIRA</div>
          <div className='date'>
            <div className='month-year'>SEPT</div>
            <div className='left-border-line'></div>
            <div className='day'>05</div>
            <div className='right-border-line'></div>
            <div id='year' className='month-year'>
              2020
            </div>
          </div>
          {tapToEnter()}
        </div>
      </Link>
    </div>
  );
}
