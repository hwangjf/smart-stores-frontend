import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import {withRouter} from 'react-router-dom'

class LoginModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true }, () => { this.props.history.push('/login') })
  handleClose = () => this.setState({ modalOpen: false }, () => { this.props.history.push('/') }) 

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



export default withRouter(LoginModal);
