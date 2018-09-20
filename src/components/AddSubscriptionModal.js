import React, { Component } from 'react';
import Adapter from '../Adapter';
import { Container, Modal, Button, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import SubscriptionForm from './SubscriptionForm';

class AddSubscriptionModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true }, () => { this.props.history.push('/addSubscription') })
  handleClose = () => this.setState({ modalOpen: false }, () => { this.props.history.push(`/`)}) 

  render() {
    return (
      <Container>
        {Adapter.isLoggedIn() 
          ? <Modal
              open={this.state.modalOpen}
              onClose={this.handleClose}
              trigger={<Button color="green" inverted onClick={this.handleOpen} >Add new subscription</Button>}
              size="tiny"
              closeIcon
            >
              <Header icon='wordpress forms' content='Add New Subscription' />
              <Modal.Content>
                <SubscriptionForm handleClose={this.handleClose}/>
              </Modal.Content>
            </Modal>
          : null
        }
      </Container>
    )
  }
}

export default withRouter(AddSubscriptionModal)