import React from 'react';
import {connect} from 'react-redux';
import { Segment, Header, Input } from 'semantic-ui-react';
import { newsSubscription, setSubscriptionDate, setSubscriptionCost, getUserSubscriptionsInfo } from '../actions/index';

class ProfileDisplay extends React.Component {
  state = { 
    date: '',
    cost: ''
  }

  componentDidMount() {
    this.props.getUserSubscriptionsInfo(this.props.user.id, this.props.subscription.id)
      .then(()=>{
        this.setState({
      date: this.props.userSubscriptionsInfo.find(s => s.subscription_id === this.props.subscription.id).date,
      cost: this.props.userSubscriptionsInfo.find(s => s.subscription_id === this.props.subscription.id).cost
    })})
  }

  handleChange = (event) => {
    this.setState({
      date: event.target.value
    }, ()=>{
      this.props.setSubscriptionDate(this.props.user.id,this.props.subscription.id, this.state.date)
    })
  }
  
  handleCost = (event) => {
    this.setState({cost: event.target.value},()=>{
      this.props.setSubscriptionCost(this.props.user.id, this.props.subscription.id, this.state.cost)
    })
  }

  render() {
    console.log(this.props.userSubscriptionsInfo, this.props.subscription)
    return (
      <Segment.Group horizontal 
        onClick={() => this.props.newsSubscription(encodeURI(this.props.subscription.name))}
      >
        <Segment compact>
          <Header as="h4">
            {this.props.subscription.name}
          </Header>
        </Segment>

        <Segment textAlign="right" floated="right" secondary>
          <Input 
            size="mini"
            style={{ marginRight: "5%"}}
            type="date"
            onChange={this.handleChange} 
            />  

          <Input 
            size="mini"
            label="Cost per month: $"
            type="number"
            value={this.props.cost}
            onChange={this.handleCost}
            style={{ width: "65px", marginRight: "28%" }}
            />
        </Segment>
      
      </Segment.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions,
    subscriptionCost: state.user.subscriptionCost,
    subscriptionDate: state.user.subscriptionDate,
    userSubscriptionsInfo: state.user.userSubscriptionsInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newsSubscription: (subscription) => dispatch(newsSubscription(subscription)),
    setSubscriptionDate: (userId, subscriptionId, date) => dispatch(setSubscriptionDate(userId, subscriptionId, date)),
    setSubscriptionCost: (userId, subscriptionId, cost) => dispatch(setSubscriptionCost(userId, subscriptionId, cost)),
    getUserSubscriptionsInfo: (userId, subscriptionId) => dispatch(getUserSubscriptionsInfo(userId, subscriptionId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDisplay);