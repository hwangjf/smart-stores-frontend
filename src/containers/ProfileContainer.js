import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Divider, Table, Button } from 'semantic-ui-react';
import ProfileDisplay from '../components/ProfileDisplay';

class ProfileContainer extends Component {
  state = {
    totalCost: 0
  }

  totalCost = (cost) => {
    let total = this.state.totalCost + cost
    this.setState({totalCost: total})
  }

  render() {
    return (
      <Container style={{width:"100vw"}}>
        <Header
          as="h4"
        >
          Subscription based retail and service providers
        </Header>
        <Divider />

        {this.props.userSubscriptions.length > 0
          ? <Table celled striped selectable width={3}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={1}>Company Name</Table.HeaderCell>
                  <Table.HeaderCell width={1}>Date subscribed</Table.HeaderCell>
                  <Table.HeaderCell width={1}>Monthly cost</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.props.userSubscriptions.map(userSubscription => {
                  return (
                    <ProfileDisplay 
                      key={`${userSubscription.user_id}-${userSubscription.subscription_id}`} 
                      {...userSubscription}
                      totalCost={this.totalCost}
                    />
                  )
                })}
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.Cell>Number of subscriptions: {this.props.userSubscriptions.length}</Table.Cell>
                  <Table.Cell>
                    {"Email subscription updates     "}
                    <Button size="tiny">Monthly</Button>
                    <Button size="tiny">Chart</Button>
                  </Table.Cell>
                  <Table.Cell>Monthly cost: ${this.state.totalCost}</Table.Cell>
                </Table.Row>
              </Table.Footer>
              
            </Table>
          : <Header style={{cursor:"pointer", fontSize:"40px"}} onClick={()=>this.props.history.push(`/${this.props.user.username}`)}>
              {"Click to go back and add some subscriptions"}
            </Header>
        }

      </Container>
    )
  }
}

// fix user subscriptions
function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    userSubscriptions: state.user.userSubscriptions,
    userSubscriptionsInfo: state.user.userSubscriptions
  }
}

export default connect(mapStateToProps)(ProfileContainer);