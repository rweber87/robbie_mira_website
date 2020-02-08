import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

import { compileDataToSave } from './util';
import addResponseMutation from '../../grapql/mutations/addResponse.js';

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
      displayMessage: false,
      email: '',
      firstName: '',
      isButtonActive: false,
      isGoing: false,
      isNotGoing: false,
      isNotGoingMessage: false,
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
      isNotGoing: true,
      isNotGoingMessage: true
    });
    setTimeout(() => this.setState({ isNotGoingMessage: false }), 5000);
  };

  onFormSubmit = async e => {
    const { client } = this.props;
    console.log(client);
    if (this.isButtonActive()) {
      try {
        const response = await client.mutate({
          mutation: addResponseMutation,
          variables: compileDataToSave(this.state)
        });
        if (response.data.addResponse) {
          this.setState({
            allergyComments: '',
            confirmCode: '',
            displayMessage: true,
            email: '',
            firstName: '',
            isButtonActive: false,
            isGoing: false,
            isNotGoing: false,
            lastName: ''
          });
        }
        setTimeout(() => this.setState({ displayMessage: false }), 5000);
      } catch (e) {
        console.log('logging error', e);
        return e;
      }
    }
  };

  isButtonActive = () => {
    const {
      confirmCode,
      email,
      firstName,
      isGoing,
      isNotGoing,
      lastName
    } = this.state;

    if (
      firstName &&
      lastName &&
      email &&
      (isGoing || isNotGoing) &&
      confirmCode === envConfirmCode.config.confirmCode
    ) {
      this.setState({ displayMessage: false, isButtonActive: true });
      return true;
    }
    this.setState({ displayMessage: false, isButtonActive: false });
    return false;
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    let {
      allergyComments,
      confirmCode,
      displayMessage,
      email,
      firstName,
      isButtonActive,
      isGoing,
      isNotGoing,
      isNotGoingMessage,
      lastName
    } = this.state;
    let buttonOpacity = isButtonActive ? '1' : '0.5';

    return (
      <div>
        <div className='welcome-text' style={{ paddingBottom: 0 }}>
          <div className='welcome-text-paragraph' style={{ paddingBottom: 0 }}>
            We kindly ask every person addressed on the invitation to fill out
            the RSVP form individually by March 10, 2020. Children are welcome!
            Please leave us a comment to let us know if you plan to bring your
            little ones.
          </div>
        </div>
        <div className='outer-ui-form'>
          <Form
            onBlur={() => this.isButtonActive()}
            onSubmit={async e => await this.onFormSubmit(e)}
            success
          >
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                required
                label='First name'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                required
                label='Last name'
                name='lastName'
                value={lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                required
                label='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
                width={8}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                required
                label='RSVP Code (can be found on your invitation)'
                name='confirmCode'
                value={confirmCode}
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
            {isNotGoing && isNotGoingMessage && (
              <Message
                header="Well that's a bummer!"
                content="We're bummed you won't be there but we'll be sure to share pictures of the day!"
              />
            )}
            <Form.Group widths='equal'>
              <Form.TextArea
                fluid
                label='Food allergies? Bringing your kids? Other comments? Please put them here!'
                name='allergyComments'
                onChange={this.handleChange}
                value={allergyComments}
              />
            </Form.Group>
            {displayMessage && (
              <Message
                success
                header='HOORAY!'
                content="Thank you for RSVP'ing to our wedding :D"
              />
            )}
            <Form.Button
              className='submit-button'
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
