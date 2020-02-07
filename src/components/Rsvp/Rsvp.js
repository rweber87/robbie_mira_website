import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import gql from 'graphql-tag';

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

  onFormSubmit = async () => {
    const { client } = this.props;
    try {
      const response = await client.mutate({
        mutation: addResponseMutation,
        variables: compileDataToSave(this.state)
      });
      if (response.data.addResponse) {
        this.setState({
          allergyComments: '',
          confirmCode: '',
          firstName: '',
          isButtonActive: false,
          isGoing: false,
          isNotGoing: false,
          lastName: ''
        });
      }
    } catch (e) {
      console.log('logging error', e);
      return e;
    }
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
            We kindly ask every person addressed on the invitation to fill out
            the RSVP form individually. Children are welcome! Please leave us a
            comment to let us know if you will bring your little ones.
          </div>
        </div>
        <div className='outer-ui-form'>
          <Form
            onBlur={() => this.isButtonActive()}
            onSubmit={async () => await this.onFormSubmit()}
          >
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
                    label='Food allergies? Bringing your kids? Other comments? Please put them here!'
                    name='allergyComments'
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </div>
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
