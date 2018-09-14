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
      <Container textAlign="center" style={{ position: "fixed", top:"8vh", right:"-1.8vw", width:"25vw", height: "80vh" }}>
        <Container textAlign="center" style={{paddingTop:"1.5vh", height:"14vh"}}>
          <Icon
            name="arrow circle left"
            size="large"
            fitted
            style={{cursor:"pointer"}}
            onClick={this.handlePageDec}
            disabled={this.state.pg < 2 ? true : false}
          >
          </Icon>
          <span style={{margin: "0 2vw 0 2vw", paddingTop:"2vh", fontSize:"22px"}}>
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
          <p style={{marginTop: "1vh", fontSize: "16px"}}>
            Click card to get news feed
          </p>
          <p style={{ fontSize: "20px"}}>
            {this.props.term.length > 0 ? decodeURI(this.props.term) : "Click on a subscription card"}
          </p>
          <br/>
        </Container>
          
        {this.state.newsFeed.length > 0 ? 
          <Card.Group centered style={{ position: "relative", margin:"auto", height:"80vh", width: "19vw", overflow:"scroll" }} textAlign="left">
            {this.state.newsFeed.map(article=><NewsDisplay key={UUID()} article={article} />) }
          </Card.Group>
        : 
          <p style={{color:"red", fontSize:"14px"}}>
            Looks like there is no new news.
          </p>
        }
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