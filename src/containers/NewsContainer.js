import React, { Component } from 'react';
import NewsDisplay from '../components/NewsDisplay';
import UUID from 'uuid';
import { Card, Container, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class NewsContainer extends Component {
  state = { 
    newsFeed:[],
    pg: 1
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/news/search/${this.props.term}%20subscription/${this.state.pg}`)
      .then(response=>response.json())
      .then(data=>this.setState({newsFeed:data.articles}))
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.term !== prevProps.term || this.state.pg !== prevState.pg) {
      if(this.props.term !== prevProps.term) {
        this.setState({pg:1},()=>{
          if (this.props.term.includes(".com")) {
            fetch(`http://localhost:4000/api/v1/news/search/${this.props.term.slice(0, this.props.term.indexOf('.'))}%20subscription/${this.state.pg}`)
              .then(response => response.json())
              .then(data => this.setState({ newsFeed: data.articles }))
          } else {
            fetch(`http://localhost:4000/api/v1/news/search/${this.props.term}%20subscription/${this.state.pg}`)
              .then(response => response.json())
              .then(data => this.setState({ newsFeed: data.articles }))
          }    
        })
      }
      if(this.props.term.includes(".com")) {
        fetch(`http://localhost:4000/api/v1/news/search/${this.props.term.slice(0, this.props.term.indexOf('.'))}%20subscription/${this.state.pg}`)
          .then(response => response.json())
          .then(data => this.setState({ newsFeed: data.articles }))
      } else {
        fetch(`http://localhost:4000/api/v1/news/search/${this.props.term}%20subscription/${this.state.pg}`)
          .then(response => response.json())
          .then(data => this.setState({ newsFeed: data.articles }))
      }
    }

  }

  handlePageInc = () => {
    this.setState({ pg: this.state.pg + 1})
  }

  handlePageDec = () => {
    if (this.state.pg > 1) {
      this.setState({ pg: this.state.pg - 1 })
    }
  }

  render() {
    return (
      <Container style={{ margin:"auto", height:"1400px", overflow:"scroll" }}>
        <Container style={{marginBottom:"5%"}} textAlign="center">
            
          <Icon
            name="arrow circle left"
            size="large"
            fitted
            style={{cursor:"pointer"}}
            onClick={this.handlePageDec}
            disabled={this.state.pg < 2 ? true : false}
          >
          </Icon>
          <span style={{marginLeft:"3%", fontSize:"22px", marginRight:"3%"}}>
            News Feed
          </span>
          <Icon
            name="arrow circle right"
            size="large"
            fitted
            onClick={this.handlePageInc}
            style={{ cursor: "pointer" }}
            >
          </Icon>
          <h4>
            Click on a subscription card
          </h4>
          <h3>{this.props.term.length > 0 ? decodeURI(this.props.term) : "Click on a subscription card"}</h3>
        </Container>

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