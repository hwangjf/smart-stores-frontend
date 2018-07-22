import React from 'react'
import { Button, Input, Checkbox, Form, Label } from 'semantic-ui-react'

class RegisterForm extends React.Component {
  render() {
    return (
      <Form widths="equal" size="tiny">
        <Form.Field required>
          <label>First Name:</label>
          <Input placeholder='First Name' />
        </Form.Field>
        <Form.Field required>
          <label>Last Name:</label>
          <Input placeholder='Last Name'/>
        </Form.Field>
        <Form.Field required>
          <label>Username:</label>
          <Input placeholder='Must be at least 5 characters'/>
        </Form.Field>
        <Form.Field required>
          <label>Password:</label>
          <Input placeholder='Must be at least 5 characters'/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
} 

export default RegisterForm