import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'


export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/new-cycle')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Registration Page</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}