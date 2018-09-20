import React, { Component } from 'react';
import { Image, Button, Card, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUserSubscription, deleteUserSubscription, newsSubscription } from '../actions/index';
import Adapter from '../Adapter';

class SubscriptionsDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      clicked: props.clicked 
    }
  }

  handleClick = () => {
    this.state.clicked ? this.deleteSubscription() : this.addSubscription() 
  }
  
  addSubscription = () => {
    this.props.addUserSubscription(this.props.user.id, this.props.subscription.id)
    this.setState({ clicked: true })
  }

  deleteSubscription = () => {
    this.props.deleteUserSubscription(this.props.user.id, this.props.subscription.id)
    this.setState({ clicked: false })
  }

  render() {
    return (
      <Card 
        style={{height:"25%", cursor:"default"}} 
        fluid 
        onClick={() => {
          this.props.newsSubscription(encodeURI(this.props.subscription.name))}}
      >
        <Card.Header textAlign="center">
          {this.props.subscription.info
          ? <Container style={{ paddingTop: "1.5vh", paddingBottom: "0.5vh", verticalAlign:"center"}}>
              <Image
                src={this.props.subscription.info.logo} 
                size="mini" 
                inline
                style={{marginRight:"5%", cursor:"pointer"}}
                onClick={() => window.open(`https://${this.props.subscription.info.domain}/`, "_blank")}
              />

              <span
                onClick={() => window.open(`https://${this.props.subscription.info.domain}/`, "_blank")}
                style={{ 
                  cursor: "pointer", 
                  marginTop: "auto", 
                  color: "#3366BB",
                  fontSize: "22px"
                }}
              >
                {this.props.subscription.name}
              </span>

            </Container>
            : null}
          </Card.Header >
        {this.props.subscription.info
          ? <Card.Content style={{ color:"black" }}>
              {this.props.subscription.info.description}
            </Card.Content>
          : null
        }
        
        <Card.Content >
          {this.props.subscription.info
            ? <React.Fragment>
                <Button
                  style={{ cursor: "pointer" }}
                  circular
                  color="twitter"
                  icon="twitter"
                  floated="left"
                  size="small"
                  onClick={() => window.open(`https://twitter.com/${this.props.subscription.info.twitter.handle}`, "_blank")}
                >
                </Button>
                <Button
                  style={{ cursor: "pointer" }}
                  circular
                  color="facebook"
                  icon="facebook f"
                  floated="left"
                  size="small"
                  onClick={() => window.open(`https://facebook.com/${this.props.subscription.info.facebook.handle}`, "_blank")}
                >
                </Button>
              
              {Adapter.isLoggedIn()
                ? <Button
                    id={this.props.subscription.id}
                    floated="right"
                    size="small"
                    color={this.state.clicked ? "red" : "green"}
                    icon={this.state.clicked ? "cancel" : "add"}
                    circular
                    onClick={this.handleClick}
                  >
                  </Button>
                : null
              }

            </React.Fragment>
            : null}
        
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserSubscription: (userId, subscriptionId) => dispatch(addUserSubscription(userId, subscriptionId)),
    deleteUserSubscription: (userId, subscriptionId) => dispatch(deleteUserSubscription(userId, subscriptionId)),
    newsSubscription: (subscription) => dispatch(newsSubscription(subscription))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsDisplay);