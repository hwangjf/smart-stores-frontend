import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class SideBarContainer extends Component {
  state = { activeItem: 'Best Rated' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical style={{marginLeft:"15px"}}>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='Best Rated'
          style={{textDecoration:"line-through"}}
          active={activeItem === 'Best Rated'}
          onClick={this.handleItemClick}
          disabled
        />
        <Menu.Item
          name='mostComments'
          style={{ textDecoration: "line-through" }}
          active={activeItem === 'mostComments'}
          onClick={this.handleItemClick}
          disabled
        />
        <Menu.Item
          name='mostPopular'
          style={{ textDecoration: "line-through" }}
          active={activeItem === 'mostPopular'}
          onClick={this.handleItemClick}
          disabled
        />
      </Menu>
    )
  }
  
  // handleItemClick = name => this.setState({ activeItem: name })

  // render() {
  //   const { activeItem } = this.state || {}

  //   return (
  //     <React.Fragment>
        
  //     </React.Fragment>
      // <Menu vertical compact>
      //   <Menu.Item>
          //* <Menu.Header>Categories</Menu.Header>

      //     <Menu.Menu>
      //       <Menu.Item
      //         name='enterprise'
      //         active={activeItem === 'enterprise'}
      //         onClick={this.handleItemClick}
      //       />
      //       <Menu.Item
      //         name='consumer'
      //         active={activeItem === 'consumer'}
      //         onClick={this.handleItemClick}
      //       />
      //     </Menu.Menu>
      //   </Menu.Item>

      //   <Menu.Item>
      //     <Menu.Header>CMS Solutions</Menu.Header>

      //     <Menu.Menu>
      //       <Menu.Item
      //         name='rails'
      //         active={activeItem === 'rails'}
      //         onClick={this.handleItemClick}
      //       />
      //       <Menu.Item
      //         name='python'
      //         active={activeItem === 'python'}
      //         onClick={this.handleItemClick}
      //       />
      //       <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
      //     </Menu.Menu>
      //   </Menu.Item>

      //   <Menu.Item>
      //     <Menu.Header>Hosting</Menu.Header>

      //     <Menu.Menu>
      //       <Menu.Item
      //         name='shared'
      //         active={activeItem === 'shared'}
      //         onClick={this.handleItemClick}
      //       />
      //       <Menu.Item
      //         name='dedicated'
      //         active={activeItem === 'dedicated'}
      //         onClick={this.handleItemClick}
      //       />
      //     </Menu.Menu>
      //   </Menu.Item>

      //   <Menu.Item>
      //     <Menu.Header>Support</Menu.Header>

      //     <Menu.Menu>
      //       <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
      //         E-mail Support
      //       </Menu.Item>

      //       <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
      //         FAQs
      //       </Menu.Item>
      //     </Menu.Menu>
      //    </Menu.Item>
      // </Menu> 
    // )
  // }
}