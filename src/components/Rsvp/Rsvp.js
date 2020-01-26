import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const aws = require('aws-sdk');
const envConfirmCode = new aws.S3({
  confirmCode: process.env.REACT_APP_CONFIRM_CODE
});

class Rsvp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allergyComments: '',
      confirmCode: '',
      firstName: '',
      isButtonActive: false,
      isGoing: false,
      isNotGoing: false,
      lastName: ''
    };
  }

  isGoingFunction = () => {
    const { confirmCode, firstName, lastName } = this.state;
    let isButtonActive =
      firstName &&
      lastName &&
      confirmCode === envConfirmCode.config.confirmCode;

    this.setState({
      isButtonActive,
      isGoing: true,
      isNotGoing: false
    });
  };

  isNotGoingFunction = () => {
    const { confirmCode, firstName, lastName } = this.state;
    let isButtonActive =
      firstName &&
      lastName &&
      confirmCode === envConfirmCode.config.confirmCode;

    this.setState({
      isButtonActive,
      isGoing: false,
      isNotGoing: true
    });
  };

  isButtonActive = () => {
    const {
      confirmCode,
      firstName,
      isGoing,
      isNotGoing,
      lastName
    } = this.state;

    if (
      firstName &&
      lastName &&
      (isGoing || isNotGoing) &&
      confirmCode === envConfirmCode.config.confirmCode
    ) {
      this.setState({ isButtonActive: true });
      return true;
    }
    this.setState({ isButtonActive: false });
    return false;
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  onSubmit = () => {};

  render() {
    let { isButtonActive, isGoing, isNotGoing } = this.state;
    let buttonOpacity = isButtonActive ? '1' : '0.5';

    return (
      <div>
        <div className='welcome-text' style={{ paddingBottom: 0 }}>
          <div className='welcome-text-paragraph' style={{ paddingBottom: 0 }}>
            We kindly ask every person planning to attend the wedding to RSVP
            individually (except the kiddies of course)
          </div>
        </div>
        <div className='outer-ui-form'>
          <Form onBlur={() => this.isButtonActive()}>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                required
                label='First name'
                name='firstName'
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                required
                label='Last name'
                name='lastName'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                required
                label='RSVP Code (can be found on your invitation)'
                name='confirmCode'
                onChange={this.handleChange}
                width={8}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                required
                className='attend'
                label='Will you attend?'
              ></Form.Field>
            </Form.Group>
            <Form.Group label='Will you attend?' inline>
              <Form.Checkbox
                label='Count Me In!'
                checked={isGoing}
                onChange={this.isGoingFunction}
              />
              <Form.Checkbox
                className='pooper'
                label='Count Me Out :('
                checked={isNotGoing}
                onChange={this.isNotGoingFunction}
              />
            </Form.Group>
            {isGoing && (
              <div>
                <Form.Group widths='equal'>
                  <Form.TextArea
                    fluid
                    label='List any food allergies (if applicable)'
                    name='allergyComments'
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </div>
            )}
            <Form.Button
              className='submit-button'
              onClick={this.isButtonActive}
              size={'large'}
              style={{ opacity: buttonOpacity }}
            >
              SUBMIT
            </Form.Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Rsvp;
