import React, { Component } from 'react';
import './App.css';
import { Grid, Segment, Input } from 'semantic-ui-react'
import TopBarContainer from './containers/TopBarContainer'
import SideBarContainer from './containers/SideBarContainer'
import BodyContainer from './containers/BodyContainer'
import { withRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileContainer from './containers/ProfileContainer';
import Adapter from './Adapter';
import { getUserSubscriptions, persistUser, getSubscriptionIndex } from './actions/index';
import NewsContainer from './containers/NewsContainer';

class App extends Component {
  state = { 
    term: '',
    clicked: false
  }
  
  componentDidMount() {
    this.props.getSubscriptionIndex()
    return Adapter.isLoggedIn()
    ?
      this.props.persistUser(this.props)
        .then(()=>this.props.history.push(`/${this.props.user.currentUser.username}`))
    : 
      null
  }

  handleSearch = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <TopBarContainer />

        <Grid column="equal" style={{ backgroundColor:"#f6f6f6"}}>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
          
            <Grid.Column width={6} >
              <Grid.Row>
                <Grid.Column>
                  <Input 
                    input="text"
                    icon="search"
                    iconPosition="left"
                    style={{marginTop:"20px", width:"90%"}} 
                    fluid 
                    placeholder='Search for name or description' 
                    size="large"
                    name="term"
                    value={this.state.term}
                    onChange={this.handleSearch}
                    // action="Create"
                  >
                  </Input>
                {/* </Grid.Column>
                <Grid.Column> */}
                  {/* <Button
                    floated="right"
                    attached="left"
                  >
                    {this.state.clicked ? 'hi' : 'notclicked'}
                  </Button> */}
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          
            <Grid.Column width={5}></Grid.Column>
          
          </Grid.Row>
          
          <Grid.Row stretched>
            <Grid.Column width={2} floated="left" fixed="left" >
              <SideBarContainer />
            </Grid.Column>

            <Grid.Column width={11} >
              <Segment>
              <Switch >
                <Route exact path={`/${this.props.user.currentUser.username}/profile`} component={ProfileContainer} />
                <Route path='/' component={()=><BodyContainer {...this.props} term={this.state.term} />} />
                <Route path={`/${this.props.user.currentUser.username}`} component={BodyContainer} />
              </Switch>
              </Segment>
            </Grid.Column>

            <Grid.Column width={3} floated="left">
              <Segment style={{marginRight:"5%"}}>
                <NewsContainer />
              </Segment>
            </Grid.Column>
          
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    subscriptions: state.subscription.subscriptions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSubscriptionIndex: () => dispatch(getSubscriptionIndex()),
    persistUser: () => dispatch(persistUser()),
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
