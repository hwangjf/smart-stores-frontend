import React, { Component } from 'react';
import './App.css';
import { Grid, Segment,Search, Container } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import { withRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileContainer from './containers/ProfileContainer';
import Adapter from './Adapter';
import { getUserSubscriptions, persistUser } from './actions/index';

class App extends Component {
  
  componentDidMount() {
    return Adapter.isLoggedIn()
    ? 
      this.props.persistUser()
    : 
      null
  }

  render() {
    return (
      <div>
        <TopBarContainer />
        <Grid column="equal" style={{ backgroundColor:"#f6f6f6"}}>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <Search style={{marginLeft:"50px", marginTop:"20px"}} fluid placeholder='Search for a company' size="large" />
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
          
          <Grid.Row stretched>
            <Grid.Column width={2} floated="left" fixed="left" >
              <SideBarContainer />
            </Grid.Column>
            <Grid.Column width={11} >
              <Segment>
              <Switch>
                <Route exact path={`/${this.props.user.currentUser.username}/profile`} component={ProfileContainer} />
                <Route path='/' component={BodyContainer} />
                <Route path={`/${this.props.user.currentUser.username}`} component={BodyContainer} />
              </Switch>
              </Segment>
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
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
