import React from 'react';
import {connect} from 'react-redux';
import { Segment, Header } from 'semantic-ui-react';
import { newsSubscription, setSubscriptionDate, setSubscriptionCost } from '../actions/index';
import DatePicker from "react-datepicker";

import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

class ProfileDisplay extends React.Component {
  state = { 
    date: moment(),
    cost: 0 
  }

  handleChange = date => {
    this.setState({
      date: date
    }, ()=>{
      // console.log(this.props.user.id, this.props.subscription.id, this.state.date.to);
      this.props.setSubscriptionDate(this.props.user.id,this.props.subscription.id, this.state.date.format("L"))
    });
  };
  
  handleCost = (event) => {
    this.setState({cost: event.target.value},()=>{
      console.log(this.props.user.id, this.props.subscription.id, this.state.cost);
      this.props.setSubscriptionDate(this.props.user.id, this.props.subscription.id, this.state.cost)
    })

  }
  render() {
    return (
      <Segment
        onClick={() => this.props.newsSubscription(encodeURI(this.props.subscription.name))}
      >
        <Header
          as="h4"
          floated="left"
        >
        {this.props.subscription.name}
        </Header>
        
        <Header
          as="h4"
          floated="right"
        >
          Cost per month: $  
          <input 
            type="number"
            value={this.props.cost}
            onChange={this.handleCost}
            style={{marginLeft:"4px", width:"50px"}}
          />
        </Header>
        
        <DatePicker
          style={{margin:"auto"}}
          selected={this.props.date}
          onChange={this.handleChange} 
          />
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions,
    subscriptionCost: state.user.subscriptionCost,
    subscriptionDate: state.user.subscriptionDate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newsSubscription: (subscription) => dispatch(newsSubscription(subscription)),
    setSubscriptionDate: (userId, subscriptionId, date) => dispatch(setSubscriptionDate(userId, subscriptionId, date)),
    setSubscriptionCost: (userId, subscriptionId, cost) => dispatch(setSubscriptionCost(userId, subscriptionId, cost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDisplay);