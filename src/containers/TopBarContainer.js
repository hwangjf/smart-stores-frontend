import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'

const TopBarContainer = () => (
  <Header as='h2'>
    <Icon name='bath' />
    <Header.Content>Smart Store</Header.Content>
    <div>
      <Button size='tiny'>hi</Button>
    </div>
  </Header>
);

export default TopBarContainer;