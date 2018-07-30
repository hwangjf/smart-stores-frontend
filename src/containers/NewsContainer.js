import React, { Component } from 'react';
import Adapter from '../Adapter';
import NewsDisplay from '../components/NewsDisplay';

class NewsContainer extends Component {
  state = { newsFeed:[] }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/news/search/twitter/1')
      .then(response=>response.json())
      .then(data=>this.setState({newsFeed:data.articles}))
  }

  render() {
    console.log(this.state.newsFeed)
    return (
      <React.Fragment>
        {this.state.newsFeed ? this.state.newsFeed.map(article=><NewsDisplay article={article} />) : null}
      </React.Fragment>
    )
  }
}

export default NewsContainer;