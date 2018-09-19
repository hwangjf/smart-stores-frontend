import React from 'react';
import { Container, Card, Header, Divider } from 'semantic-ui-react';
import SubscriptionsDisplay from '../components/SubscriptionsDisplay';
import { connect } from 'react-redux';
import { getUserSubscriptions, getSubscriptionIndex } from '../actions/index';

class BodyContainer extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.props.getUserSubscriptions(this.props.user.id)
    }
  }

  filterSubscriptions = (array) => {
    return array.filter(s => s.name.toLowerCase().includes(this.props.term.toLowerCase()) || s.info.description.toLowerCase().includes(this.props.term.toLowerCase()))
  }

  render() {
    console.log(this.props.userSubscriptions)
    return (
      <Container >
        {this.props.subscriptions ?
          <React.Fragment>
            <Header
              as="h3"
            >
              Subscription based retail and service providers
            </Header>
            <Divider />
            
            <Card.Group itemsPerRow={3} centered>
              {this.props.subscriptions.length > 0 
              ? 
                this.filterSubscriptions(this.props.subscriptions).map(subscription => {
                  if (this.props.userSubscriptions.map(s=>s.id).includes(subscription.id)) {
                    return <SubscriptionsDisplay key={subscription.id} subscription={subscription} clicked={true}/>
                  }
                  return <SubscriptionsDisplay key={subscription.id} subscription={subscription} clicked={false}/>
                })
              : 
                null
              }
            </Card.Group>
          </React.Fragment>
        :
          null 
        }
      </Container>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions,
    subscriptions: state.subscription.subscriptions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId)),
    getSubscriptionIndex: () => dispatch(getSubscriptionIndex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);