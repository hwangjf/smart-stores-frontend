import React from 'react';
import {Container,Header,Segment} from 'semantic-ui-react';
import SubscriptionsDisplay from '../components/SubscriptionsDisplay';
import Adapter from '../Adapter';
import { connect } from 'react-redux';
import { getUserSubscriptions } from '../actions/index';
import ProfileDisplay from '../components/ProfileDisplay';
import {Route} from 'react-router-dom';

class BodyContainer extends React.Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    Adapter.getSubscriptionIndex()
      .then(response=>response.json())
      .then(json=> {
        this.setState({subscriptions:json}
          // ,()=>{console.log(this.state)}
        )
    })

  }

  render() {
    return (
      <Container fluid>
        {this.state.subscriptions.length > 0 
        ? 
          this.state.subscriptions.map(subscription => <SubscriptionsDisplay key={subscription.id} subscription={subscription} />)
        : 
          null}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    userSubscriptions: state.userSubscriptions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserSubscriptions: () => dispatch(getUserSubscriptions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);