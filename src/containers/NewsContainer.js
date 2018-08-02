import React, { Component } from 'react';
import NewsDisplay from '../components/NewsDisplay';
import UUID from 'uuid';
import { Header, Card, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class NewsContainer extends Component {
  state = { newsFeed:[] }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/news/search/${this.props.term}%20subscription/1`)
      .then(response=>response.json())
      .then(data=>this.setState({newsFeed:data.articles}))
  }

  componentDidUpdate(prevProps) {
    if(this.props.term !== prevProps.term) {
      if(this.props.term.includes(".com")) {
        fetch(`http://localhost:4000/api/v1/news/search/${this.props.term.slice(0, this.props.term.indexOf('.'))}%20subscription/1`)
          .then(response => response.json())
          .then(data => this.setState({ newsFeed: data.articles }))
      } else {
        fetch(`http://localhost:4000/api/v1/news/search/${this.props.term}%20subscription/1`)
          .then(response => response.json())
          .then(data => this.setState({ newsFeed: data.articles }))
      }
    }
  }

  render() {
    return (
      <Container style={{ margin:"auto" }}>
        <Header as="h4" style={{marginBottom:"5%"}} textAlign="center">
            News Feed
        </Header>
        <Card.Group centered>
          {this.state.newsFeed ? this.state.newsFeed.map(article=><NewsDisplay key={UUID()} article={article} />) : null}
        </Card.Group>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    term: state.subscription.term
  }
}

export default connect(mapStateToProps)(NewsContainer)