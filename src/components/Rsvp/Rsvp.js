import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Rsvp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = () => {};

  render() {
    let { firstName, isGoing, isNotGoing } = this.state;
    console.log('firstName', firstName);
    return (
      <div className='outer-ui-form'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='First name'
              name='firstName'
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label='Last name'
              name='lastName'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              label='Email'
              width={8}
              name='email'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              label='Code (can be found on your invitation)'
              width={8}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
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
                <Form.Input fluid label='Full Address' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.TextArea
                  fluid
                  label='List any food allergies (if applicable)'
                />
              </Form.Group>
            </div>
          )}
          <Form.Button className='submit-button'>SUBMIT</Form.Button>
        </Form>
      </div>
    );
  }
}

export default Rsvp;
