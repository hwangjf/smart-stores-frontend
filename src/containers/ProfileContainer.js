import React, { Component } from 'react';
import { connect } from 'react-redux';
import Adapter from '../Adapter';
import { Segment } from 'semantic-ui-react';
import SubscriptionsDisplay from '../components/SubscriptionsDisplay';
import ProfileDisplay from '../components/ProfileDisplay';

class ProfileContainer extends Component {
  render() {
    return (
      <Segment>
        {console.log(this.props.userSubscriptions)}
        {/* {this.props.userSubscriptions ? this.props.userSubscriptions.map(s=>s.name) : null } */}

        {this.props.userSubscriptions.map(subscription => <ProfileDisplay key={subscription.id} subscription={subscription} /> )}
        {/* {()=>{debugger}} */}
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

export default connect(mapStateToProps)(ProfileContainer);