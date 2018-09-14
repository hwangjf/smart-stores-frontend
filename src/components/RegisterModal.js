import React from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Adapter from '../Adapter';

class RegisterModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true }, ()=>{this.props.history.push('/register')})
  handleClose = () => this.setState({ modalOpen: false }, () => { Adapter.isLoggedIn() ? this.props.history.push(`/${this.props.user.currentUser.username}`) : this.props.history.push(`/`)}) 

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button color="blue" onClick={this.handleOpen} >Register</Button>}
        size="tiny"
        closeIcon
      >
        <Header icon='pen square' content='Register Form' />
        <Modal.Content>
          <RegisterForm handleClose={this.handleClose}/>
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

export default withRouter(connect(mapStateToProps)(RegisterModal));
