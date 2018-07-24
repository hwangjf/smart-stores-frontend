import React, { Component } from 'react';
import {connect} from 'react-redux';
import Adapter from '../Adapter';

class ProfileDisplay extends Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    Adapter.getUserSubscriptions()
      .then(response => response.json())
      .then(subscriptions => this.setState({ subscriptions }))
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect()(ProfileDisplay);