import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import AppContext from '../../contexts/AppContext'


export default class RegistrationPage extends Component {
  static contextType = AppContext

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    this.context.updateSidebar()
    history.push('/new-cycle')
  }

  render() {
    return (
      <section className='RegistrationPage content'>
        <h2>Registration Page</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}