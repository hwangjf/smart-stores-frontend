import React, { Component } from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import Adapter from '../Adapter';

class SubscriptionForm extends Component {
  state = {
    companyUrl: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // const user = this.state
    Adapter.createSubscription(this.state.companyUrl)
    this.props.handleClose()
  }

  render() {
    return (
      <Form widths="equal" size="tiny" onSubmit={this.handleSubmit}>
        <Form.Field required>
          <label>Company URL: </label>
          <Input 
            required
            icon="linkify"
            iconPosition="left"
            placeholder={`format: netflix.com`}
            name="companyUrl"
            value={this.state.companyUrl}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default SubscriptionForm