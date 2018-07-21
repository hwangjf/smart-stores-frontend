import React, { Component } from 'react';
import './App.css';
import { Grid,Image,Segment } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <TopBarContainer />
        <Grid column="equal" stretched>
          <Grid.Row stretched>
            <Grid.Column width={5} floated="left">
              <SideBarContainer />
            </Grid.Column>
            <Grid.Column width={8} >
              <Segment>
                10
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

export default App;
