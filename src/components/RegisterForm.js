import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { register, login } from '../actions/index';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
  state = {
    // firstName: "",
    // lastName: "",
    // email: "",
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const user = this.state
    this.props.register(user)
    // .then(() => this.props.login(user))
    this.props.handleClose()
  }
  
  render() {
    return (
      <Form widths="equal" size="tiny" onSubmit={this.handleSubmit}>
        {/*
          REGISTER FORM THAT IS NOT CONNECTED TO THE BACKEND
        */}
        
        {/* <Form.Field required>
          <label>First Name:</label>
          <Input 
            name="firstName" 
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name" 
          />
        </Form.Field>
        <Form.Field required>
          <label>Last Name:</label>
          <Input 
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}
            name="lastName"
          />
        </Form.Field>
        <Form.Field required>
          <label>E-mail:</label>
          <Input 
            icon="mail"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            iconPosition="left" 
            placeholder="E-mail"
          />
        </Form.Field> */}
        <Form.Field required>
          <label>Username:</label>
          <Input 
            icon="user outline"
            onChange={this.handleChange}
            iconPosition="left" 
            value={this.state.username}
            name="username"
            placeholder="Must be at least 5 characters"/>
        </Form.Field>
        <Form.Field required>
          <label>Password:</label>
          <Input 
            icon="key"
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            iconPosition="left" 
            placeholder="Must be at least 5 characters"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    register: (user) => dispatch(register(user)),
    login: (user) => dispatch(login(user))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));