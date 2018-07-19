import React, { Component } from 'react';
import './App.css';
import { Grid,Image } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBarContainer />
        <Grid columns={3} divided>
          <Grid.Row >
            <SideBarContainer />
          </Grid.Row>
          <Grid.Row >
            <BodyContainer />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
