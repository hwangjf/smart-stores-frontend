import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import {withRouter} from 'react-router-dom';

class RegisterModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true }, ()=>{this.props.history.push('/register')})
  handleClose = () => this.setState({ modalOpen: false }, () => { this.props.history.push('/') }) 

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



export default withRouter(RegisterModal);
