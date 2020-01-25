import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Rsvp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allergyComments: '',
      confirmCode: '',
      firstName: '',
      isGoing: false,
      isNotGoing: false,
      lastName: ''
    };
  }

  isGoingFunction = () => {
    this.setState({
      isGoing: true,
      isNotGoing: false
    });
  };

  isNotGoingFunction = () => {
    this.setState({
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
    let envConfirmCode = process.env.REACT_APP_CONFIRM_CODE;

    if (
      firstName &&
      lastName &&
      (isGoing || isNotGoing) &&
      confirmCode === envConfirmCode
    ) {
      return true;
    }
    return false;
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = () => {};

  render() {
    let { isGoing, isNotGoing } = this.state;
    let isButtonActive = this.isButtonActive();

    return (
      <div>
        <div className='welcome-text' style={{ paddingBottom: 0 }}>
          <div className='welcome-text-paragraph' style={{ paddingBottom: 0 }}>
            We kindly ask every person planning to attend the wedding to RSVP
            individually (except the kiddies of course)
          </div>
        </div>
        <div className='outer-ui-form'>
          <Form>
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
              active={isButtonActive}
              className='submit-button'
              onClick={this.isButtonActive}
              size={'large'}
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
