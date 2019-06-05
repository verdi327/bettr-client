import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  
  render() {
    return (
      <section className='RegistrationPage content'>
        <h2>Registration Page</h2>
        <RegistrationForm/>
      </section>
    )
  }
}