import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';


class RegisterModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button basic color="blue" onClick={this.handleOpen} >Register</Button>}
        size="tiny"
        closeIcon
      >
        <Header icon='pen square' content='Register Form' />
        <Modal.Content>
          <RegisterForm />
        </Modal.Content>
      </Modal>
    )
  }
}



export default RegisterModal;
