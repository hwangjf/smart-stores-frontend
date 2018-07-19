import React from 'react';
import {Grid,Image} from 'semantic-ui-react'

class BodyContainer extends React.Component {
  state = {

  }

  render() {
    return (
      <Grid>
        <Grid.Column floated='left' width={5}>
          <h1>HI</h1>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <h1>HI</h1>
        </Grid.Column>
      </Grid>
    )
  }
}



export default BodyContainer;