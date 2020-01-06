import React from 'react';

export default function Photo(props) {
  const { imageSelected } = props;

  return (
    <div
      className='photo-image'
      style={{
        width: '100%',
        maxHeight: '350px'
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageSelected.image})`,
          backgroundPosition: `${imageSelected.style.backgroundPosition}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          overflow: 'hidden',
          height: '100%'
        }}
      ></div>
    </div>
  );
}
