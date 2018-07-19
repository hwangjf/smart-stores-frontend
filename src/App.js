import React, { Component } from 'react';
import './App.css';
import { Grid,Image } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
// import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import GridExampleDividedNumber from './containers/GridExampleDividedNumber'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBarContainer />
        <div className="ui segment">
          hi
        </div>
        <GridExampleDividedNumber />
        {/* <Grid>
          <Grid.Column floated='left' width={5}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid> */}
        {/* <BodyContainer /> */}
        {/* <SideBarContainer /> */}
      </div>
    );
  }
}

export default App;
