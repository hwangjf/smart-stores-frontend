import React, { Component } from 'react';
import './App.css';
import { Grid,Image,Segment, Search } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
              <BodyContainer />
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

export default App;
