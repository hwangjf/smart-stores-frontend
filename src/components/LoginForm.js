import React from 'react'
import { Button, Input, Checkbox, Form, Label } from 'semantic-ui-react'

class LoginForm extends React.Component {
  render() {
    return (
      <Form widths="equal" size="tiny">
        <Form.Field required>
          <label>Username:</label>
          <Input placeholder='Must be at least 5 characters' />
        </Form.Field>
        <Form.Field required>
          <label>Password:</label>
          <Input placeholder='Must be at least 5 characters' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default LoginForm