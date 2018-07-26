import React, { Component } from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUserSubscription, deleteUserSubscription } from '../actions/index';
import Adapter from '../Adapter';

class SubscriptionsDisplay extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.state.clicked ? this.deleteSubscription() : this.addSubscription() 
  }
  
  addSubscription = () => {
    this.props.addUserSubscription(this.props.user.id, this.props.subscription.id)
    this.setState({ clicked: true })
  }

  deleteSubscription = () => {
    this.props.deleteUserSubscription(this.props.user.id, this.props.subscription.id)
    this.setState({ clicked: false })
  }

  render() {
    return (
      <Segment.Group>
        <Segment.Group>
          <Segment>
            {this.props.subscription.info 
            ?
              <React.Fragment>
                <Image 
                  src={this.props.subscription.info.logo} 
                  size="mini" 
                  inline 
                  style={{marginRight:"8px"}} 
                  bordered 
                />

                {this.props.subscription.name}
                
                {Adapter.isLoggedIn()
                ? 
                  <Button 
                    id={this.props.subscription.id} 
                    floated="right" 
                    basic
                    color={this.state.clicked ? "red" : "green"} 
                    icon={this.state.clicked ? "cancel" : "add"} 
                    circular
                    onClick={this.handleClick}
                  >
                  </Button>
                :
                  null
                }

              </React.Fragment>
            : 
              null}
          </Segment>
        </Segment.Group>
        {this.props.subscription.info
        ?
          <Segment>{this.props.subscription.info.description}</Segment>
        :
          null}
      </Segment.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserSubscription: (userId, subscriptionId) => dispatch(addUserSubscription(userId, subscriptionId)),
    deleteUserSubscription: (userId, subscriptionId) => dispatch(deleteUserSubscription(userId, subscriptionId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsDisplay);