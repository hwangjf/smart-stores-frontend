import React, { Component } from 'react';
import { 
  Menu, 
  Button, 
  // Modal, 
  // Icon, 
  // Header, 
  Search, 
  // Input, 
  // Form
} from 'semantic-ui-react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { loginGuest, logout, getUserSubscriptions } from '../actions/index';
import { connect } from 'react-redux';
import Adapter from '../Adapter';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import ProfileDisplay from '../components/ProfileDisplay';
import BodyContainer from './BodyContainer';

class TopBarContainer extends Component {
  state = {
  }

  guestSignin = (event) => {
    return this.props.loginGuest()
      .then(()=>{
        this.props.history.push(`/${this.props.user.currentUser.username}`)
        this.props.getUserSubscriptions(this.props.user.currentUser.id)
      })
  }

  logout = (event) => {
    this.props.history.push('/')
    this.props.logout();
  }

  // handleClick = () => {
  //   this.props.history.push(`/${this.props.user.currentUser.username}/profile`)
  // }

  url = () => {
    return Adapter.isLoggedIn() ? this.props.history.push(`/${this.props.user.currentUser.username}`) : this.props.history.push(`/`)
  }

  render() {
    return (
      <Menu>
        <Menu.Item header onClick={()=>this.url()}>Smart Stores</Menu.Item>
        {this.props.user.currentUser.username 
        ? 
          <Menu.Item onClick={this.handleClick}>
            <Link to={`/${this.props.user.currentUser.username}/profile`}>
              {this.props.user.currentUser.username} Profile
            </Link>
          </Menu.Item>
        :
          null
        }
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
              <Button basic color="green" type="submit" onClick={this.guestSignin}>Guest</Button>
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
    logout: () => dispatch(logout()),
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId))
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarContainer));
