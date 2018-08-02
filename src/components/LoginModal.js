import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Adapter from '../Adapter';

class LoginModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true }, () => { this.props.history.push('/login') })
  handleClose = () => this.setState({ modalOpen: false }, () => { Adapter.isLoggedIn() ? this.props.history.push(`/${this.props.user.currentUser.username}`) : this.props.history.push(`/`)}) 

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button inverted onClick={this.handleOpen}>Log In</Button>}
        size="tiny"
        closeIcon
      >
        <Header icon='pen square' content='Log In' />
        <Modal.Content>
          <LoginForm handleClose={this.handleClose} />
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(LoginModal));
