import React from 'react';
import { Container } from 'semantic-ui-react';
import SubscriptionsDisplay from '../components/SubscriptionsDisplay';
import Adapter from '../Adapter';
import { connect } from 'react-redux';
import { getUserSubscriptions, getSubscriptionIndex } from '../actions/index';

class BodyContainer extends React.Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    return this.props.location.pathname.slice(-7) === 'profile'
    ?
      null
    :
      Adapter.getSubscriptionIndex()
        .then(response => response.json())
        .then(subscriptions => {
          let array = []
          subscriptions.forEach(s=> s.info? array.push(s):null)
          this.setState({subscriptions:array})
        })
  }

  render() {
    return (
      <React.Fragment>
      {this.state.subscriptions ?
        <Container fluid>
          {this.state.subscriptions.length > 0 
          ? 
            this.state.subscriptions.map(subscription => {
              return (
                <SubscriptionsDisplay 
                  key={subscription.id} 
                  subscription={subscription} 
                  // clicked={false}
                />
              )
            })
          : 
            null
          }
        </Container>
      :
        null 
      }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions,
    subscriptions: state.subscriptions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId)),
    getSubscriptionIndex: () => dispatch(getSubscriptionIndex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);