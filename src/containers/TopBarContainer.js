import React, { Component } from 'react'
import { Menu, Button, Modal, Icon, Header } from 'semantic-ui-react'
import RegisterForm from '../components/RegisterForm'

export default class TopBarContainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        />
        <Menu.Item>
          <Modal trigger={<Button>Register</Button>} closeIcon>
            <Header icon='bath' content='Register Form' />
            <Modal.Content>
              <RegisterForm />
            </Modal.Content>
            <Modal.Actions>
              <Button color='red'>
                <Icon name='remove' /> No
              </Button>
              <Button color='green'>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Menu.Item>

        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Register</Button>
        </Menu.Item>
      </Menu>
    )
  }
}