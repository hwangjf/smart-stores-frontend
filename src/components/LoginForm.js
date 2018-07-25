import React from 'react'
import { Button, Input, Form, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { login } from '../actions/index';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user)
    this.props.handleClose()
  }

  render() {
    return (
      <Form widths="equal" size="tiny" onSubmit={this.handleSubmit}>
        <Form.Field required>
          <label>Username:</label>
          <Input 
            required
            icon="user outline"
            iconPosition="left"
            placeholder="Must be at least 5 characters" 
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password:</label>
          <Input 
            icon="key"
            required
            iconPosition="left"
            type="password"
            placeholder="Must be at least 5 characters" 
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
