import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageRendered: undefined
    };
  }

  render() {
    const { imageSelected } = this.props;
    return (
      <div
        style={{
          height: '30vw',
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
}

export default Photo;
