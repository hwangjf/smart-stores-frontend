import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const TopBarContainer = () => (
  <Header as='h2'>
    <Icon name='plug' />
    <Header.Content>Uptime Guarantee</Header.Content>
  </Header>
);

export default TopBarContainer;