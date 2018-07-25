import React, { Component } from 'react';
import {connect} from 'react-redux';
import Adapter from '../Adapter';
import { Segment } from 'semantic-ui-react';

class ProfileDisplay extends Component {
  render() {
    // console.log(this.props.userSubscriptions)
    return (
      <Segment>
        {/* {this.props.userSubscriptions ? this.props.userSubscriptions.map(s=>s.name) : null }
       */}
       {this.props.userSubscriptions.map(s=>s.name)}
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    userSubscriptions: state.user.userSubscriptions
  }
}

export default connect(mapStateToProps)(ProfileDisplay);