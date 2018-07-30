import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';

class NewsDisplay extends Component {
  render() {
    return (
      <Segment>
        <h1>{this.props.article.title}</h1>
      </Segment>
    )
  }
}

export default NewsDisplay;
