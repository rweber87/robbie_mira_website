import image1 from '../images/wedding_img_1.jpg';
import image2 from '../images/wedding_img_2.jpg';
import image3 from '../images/wedding_img_3.jpg';
import image4 from '../images/wedding_img_4.jpg';
import image5 from '../images/wedding_img_5.jpg';
import image6 from '../images/wedding_img_6.jpg';

const images = {
  welcome: {
    image: image1,
    style: {
      backgroundPosition: '50% 25%'
    }
  },
  events: {
    image: image2,
    style: {
      backgroundPosition: '50% 35%'
    }
  },
  travel: {
    image: image3,
    style: {
      backgroundPosition: '50% 10%'
    }
  },
  lodging: {
    image: image4,
    style: {
      backgroundPosition: '50% 60%'
    }
  },
  rsvp: {
    image: image5,
    style: {
      backgroundPosition: '50% 50%'
    }
  },
  qanda: {
    image: image6,
    style: {
      backgroundPosition: '50% 55%'
    }
  }
};

export default images;

export function imagesFunction(images, imageSelected) {
  switch (imageSelected) {
    case 'welcome':
      return images.welcome;
    case 'events':
      return images.events;
    case 'travel':
      return images.travel;
    case 'lodgins':
      return images.lodgins;
    case 'rsvp':
      return images.rsvp;
    case 'qanda':
      return images.qanda;
    default:
      return images.welcome;
  }
}
