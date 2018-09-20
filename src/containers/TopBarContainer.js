import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { loginGuest, logout, getUserSubscriptions } from '../actions/index';
import { connect } from 'react-redux';
import Adapter from '../Adapter';
import {withRouter} from 'react-router-dom';

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

  url = () => {
    return Adapter.isLoggedIn() ? this.props.history.push(`/${this.props.user.currentUser.username}`) : this.props.history.push(`/`)
  }

  render() {
    return (
      <Menu inverted color="blue" size="huge" style={{position:"fixed", width:"100vw", top:"0",left:"0", height:"7vh", zIndex:"1"}}>
        <Menu.Item style={{fontSize:"20px"}} fitted="vertically" color="blue" header onClick={()=>this.url()}>Smart Stores</Menu.Item>
        {this.props.user.currentUser.username 
        ? 
          <Menu.Item onClick={()=>this.props.history.push(`/${this.props.user.currentUser.username}/profile`)} >
            
            <Icon name="user circle"/>  
              {this.props.user.currentUser.username}
            
          </Menu.Item>
        :
          null
        }
        
        {Adapter.isLoggedIn()
          ? <Menu.Item position="right">
              <Button floated="right" color="blue" type="submit" onClick={this.logout}>Log Out</Button>
            </Menu.Item>
          : <React.Fragment>
              <Menu.Item position="right" floated="right">
                <RegisterModal />
                <LoginModal />
              </Menu.Item>
              <Menu.Item>
                <Button color="blue" type="submit" onClick={this.guestSignin}>Guest</Button>
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
