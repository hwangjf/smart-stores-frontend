import React, { Component } from 'react';
import {connect} from 'react-redux';
import Adapter from '../Adapter';
import { Segment } from 'semantic-ui-react';

class ProfileDisplay extends Component {
  render() {
    return (
      <Segment>
      <h1>{this.props.subscription.name}</h1>
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions
  }
}

export default connect(mapStateToProps)(ProfileDisplay);