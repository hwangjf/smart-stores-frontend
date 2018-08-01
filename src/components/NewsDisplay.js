import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class NewsDisplay extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
            <a
              href={`${this.props.article.url}`}
              target="_blank"
            >
              {this.props.article.title}
            </a>
        </Card.Content>
        <Card.Content>
          {this.props.article.description}
        </Card.Content >
      </Card>
    )
  }
}

export default NewsDisplay;
