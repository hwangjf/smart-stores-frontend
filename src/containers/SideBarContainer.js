import React, { Component } from 'react'
import { Menu, Container, Header, Button } from 'semantic-ui-react'
import AddSubscriptionModal from '../components/AddSubscriptionModal'

export default class SideBarContainer extends Component {
  state = { activeItem: 'Best Rated' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container style={{padding: "1vw"}}>
        <AddSubscriptionModal />
      </Container>
      // <Menu text vertical style={{marginLeft:"15px"}}>
      //   <Menu.Item header>Sort By</Menu.Item>
      //   <Menu.Item
      //     name='Best Rated'
      //     style={{textDecoration:"line-through"}}
      //     active={activeItem === 'Best Rated'}
      //     onClick={this.handleItemClick}
      //     disabled
      //   />
      //   <Menu.Item
      //     name='mostComments'
      //     style={{ textDecoration: "line-through" }}
      //     active={activeItem === 'mostComments'}
      //     onClick={this.handleItemClick}
      //     disabled
      //   />
      //   <Menu.Item
      //     name='mostPopular'
      //     style={{ textDecoration: "line-through" }}
      //     active={activeItem === 'mostPopular'}
      //     onClick={this.handleItemClick}
      //     disabled
      //   />
      // </Menu>
    )
  }
}