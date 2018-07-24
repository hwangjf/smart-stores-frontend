import React from 'react';
import {Container,Header,Segment} from 'semantic-ui-react'
import SubscriptionsDisplay from '../components/SubscriptionsDisplay'
import Adapter from '../Adapter';

class BodyContainer extends React.Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    Adapter.getSubscriptionIndex()
      .then(response=>response.json())
      .then(json=> {
        this.setState({subscriptions:json},()=>{console.log(this.state)
        })
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



export default BodyContainer;