import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';


class LoginModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button basic color="blue" onClick={this.handleOpen}>Log In</Button>}
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



export default LoginModal;
