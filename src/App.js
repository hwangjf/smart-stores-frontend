import React, { Component } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import { withRouter, Switch, Route } from 'react-router-dom';
import ProfileDisplay from './components/ProfileDisplay';

class App extends Component {
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
                <Route exact path='/profile' component={ProfileDisplay} />
                <Route path='/' component={BodyContainer} />
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

export default withRouter(App);
