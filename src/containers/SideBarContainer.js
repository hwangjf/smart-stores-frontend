import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const SideBarContainer = () => (
  <Grid>
    <Grid.Column floated='left' width={3}>
      Categories
      <Grid.Row>1</Grid.Row>
      <Grid.Row>2</Grid.Row>
      <Grid.Row>3</Grid.Row>
    </Grid.Column>
  </Grid>
)

export default SideBarContainer