import React, { Component } from 'react'
import { Menu, Button, Modal, Icon, Header, Search, Input, Form} from 'semantic-ui-react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm';

export default class TopBarContainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <Menu>
        <Menu.Item header>Smart Stores</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item position="right">
        {/* <Form widths="equal">
          <Form.Field>
            <Input icon='search' placeholder='Search for a company or category' />
          </Form.Field>
        </Form> */}
          <Search fluid placeholder='Search for a company'/>
        </Menu.Item>
        
        <Menu.Item position="right" floated="right">
          <Modal trigger={<Button>Register</Button>} size="tiny" closeIcon>
            <Header icon='pen square' content='Register Form' />
            <Modal.Content>
              <RegisterForm />
            </Modal.Content>
          </Modal>

          <Modal trigger={<Button>Log-In</Button>} size="tiny" closeIcon>
            <Header icon='pen square' content='Log In' />
            <Modal.Content>
              <LoginForm />
            </Modal.Content>
          </Modal>
        </Menu.Item>
        <Menu.Item>
          <Button>Test</Button>
        </Menu.Item>
      </Menu>
    )
  }
}