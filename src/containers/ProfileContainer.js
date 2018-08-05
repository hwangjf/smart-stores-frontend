import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Container, Divider } from 'semantic-ui-react';
import ProfileDisplay from '../components/ProfileDisplay';

class ProfileContainer extends Component {

  render() {
    return (
      <Container>
        <Header
          as="h4"
        >
          Subscription based retail and service providers
        </Header>
        <Divider />
        <Segment.Group>
          {this.props.userSubscriptions.length > 0 ?
            this.props.userSubscriptions.map(subscription => {
            return <ProfileDisplay key={subscription.id} subscription={subscription} /> 
          })
          :
          <Header style={{cursor:"pointer", fontSize:"40px"}} onClick={()=>this.props.history.push(`/${this.props.user.username}`)}>
            {"Click to go back and add some subscriptions"}
          </Header>
          }
        </Segment.Group>
      </Container>
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