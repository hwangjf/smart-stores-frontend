import React, { Component } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import { withRouter, Switch, Route } from 'react-router-dom';
import ProfileDisplay from './components/ProfileDisplay';
import {connect} from 'react-redux';
import ProfileContainer from './containers/ProfileContainer';
import Adapter from './Adapter';
import { loginGuest, login, getUserSubscriptions,persistUser } from './actions/index';

class App extends Component {
  
  componentDidMount() {
    Adapter.isLoggedIn()
    ? 
      this.props.persistUser()
      // Adapter.refresh()
      //   .then(response => response.json())
        // .then(user => )
        // .then(response => response.json())
        // .then(data => login(data.id))
      // .this.props.login()
    : 
      null
  }
  

  render() {
    return (
      <div>
        <TopBarContainer />
        <Grid column="equal">
          <Grid.Row stretched>
            <Grid.Column width={3} floated="left" fixed="left" >
              <SideBarContainer />
            </Grid.Column>
            <Grid.Column width={10} >
              <Switch>
                <Route exact path={`/${this.props.user.currentUser.username}/profile`} component={ProfileContainer} />
                <Route path='/' component={BodyContainer} />
                <Route path={`/${this.props.user.currentUser.username}`} component={BodyContainer} />
              </Switch>
            </Grid.Column>
            <Grid.Column width={3} floated="right" >
              <Segment>3</Segment>
              <Segment>4</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // loginGuest: () => dispatch(loginGuest()),
    // login: () => dispatch(login()),
    persistUser: () => dispatch(persistUser()),
    // getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
