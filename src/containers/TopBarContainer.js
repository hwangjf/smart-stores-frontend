import React, { Component } from 'react'
import { Menu, Button, Modal, Icon, Header, Search, Input, Form} from 'semantic-ui-react'
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { loginGuest,logout } from '../actions/index';
import { connect } from 'react-redux';
import Adapter from '../Adapter';
import { withRouter } from 'react-router';

class TopBarContainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  guestSignin = (event) => {
    event.preventDefault();
    
    this.props.loginGuest();
  }

  logout = (event) => {
    event.preventDefault();

    this.props.logout();
  }

  render() {
    const { activeItem } = this.state

    return (

      <Menu>
        <Menu.Item header>Smart Stores</Menu.Item>

        <Menu.Item position="right">
          <Search fluid placeholder='Search for a company'/>
        </Menu.Item>
        
        
        {Adapter.isLoggedIn()
        ?
        
          <Menu.Item>
            <Button basic color="red" type="submit" onClick={this.logout}>Log Out</Button>
          </Menu.Item>
        :
          <React.Fragment>
            <Menu.Item position="right" floated="right">
              <RegisterModal />
              <LoginModal />
            </Menu.Item>
            <Menu.Item>
              <Button basic color="green" type="submit" onClick={this.guestSignin}>Test</Button>
            </Menu.Item>
          </React.Fragment>
        }
      </Menu>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginGuest: () => dispatch(loginGuest()),
    logout: ()=> dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(withRouter(TopBarContainer));
