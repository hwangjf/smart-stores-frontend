import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import ProfileDisplay from '../components/ProfileDisplay';

class ProfileContainer extends Component {

  render() {
    return (
      <Segment>
        {this.props.userSubscriptions.map(subscription => {
          return <ProfileDisplay key={subscription.id} subscription={subscription} /> 
        })}
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