import React from 'react';
import {connect} from 'react-redux';
import { Table, Input } from 'semantic-ui-react';
import { newsSubscription, setSubscriptionDate, setSubscriptionCost, getUserSubscriptionsInfo, getUserSubscriptions } from '../actions/index';
import Adapter from '../Adapter';

class ProfileDisplay extends React.Component {
  state = { 
    date: '',
    cost: ''
  }

  componentDidMount() {
    Adapter.getUserSubscriptionsInfo(this.props.user_id, this.props.subscription_id)
      .then(response => response.json())
      .then(usersubscription => {
        this.setState({
          date: usersubscription.date || '',
          cost: usersubscription.cost || ''
        }, () => {
          isNaN(parseInt(this.state.cost,10)) ? null : this.props.totalCost(parseInt(this.state.cost,10))
          return
        })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.cost !== prevState.cost) {
      isNaN(parseInt(this.state.cost,10)) ? null : this.props.totalCost(parseInt(this.state.cost,10))
    }
  }

  handleDate = (event) => {
    this.setState({
      date: event.target.value
    }, ()=>{
      // console.log(this.state.date)
      this.props.setSubscriptionDate(this.props.user.id,this.props.subscription.id, this.state.date)
    })
  }
  
  handleCost = (event) => {
    this.setState({cost: event.target.value},()=>{
      // console.log(this.state.cost)
      this.props.setSubscriptionCost(this.props.user.id, this.props.subscription.id, this.state.cost)
    })
  }

  render() {
    // console.log(this.state)
    return (
      <Table.Row
        onClick={() => {this.props.newsSubscription(encodeURI(this.props.subscription.name))}}
      >
        <Table.Cell>
          {this.props.subscription.name}
        </Table.Cell>
        
        <Table.Cell>
          <Input 
            size="mini"
            style={{ marginRight: "5%"}}
            label="Date:"
            type="date"
            value={this.state.date}
            onChange={this.handleDate}
          />  
        </Table.Cell>
        
        <Table.Cell>
          <Input 
            size="mini"
            label="Cost per month: $"
            type="number"
            value={this.state.cost}
            onChange={this.handleCost}
            style={{ width: "65px", marginRight: "28%" }}
          />
        </Table.Cell>
      </Table.Row>
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
    getUserSubscriptionsInfo: (userId, subscriptionId) => dispatch(getUserSubscriptionsInfo(userId, subscriptionId)),
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDisplay);