import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import AppContext from '../../contexts/AppContext'

export default class LoginPage extends Component {
  static contextType = AppContext

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    this.context.updateSidebar()
    history.push(destination);
  }
  
  render() {
    return (
      <section className='LoginPage content'>
        <h2>Login</h2>
        < LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    )
  }
}