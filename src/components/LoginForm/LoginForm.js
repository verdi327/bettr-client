import React, {Component} from 'react';
import './LoginForm.css';
import TokenService from '../../services/TokenService'

  
export default class LoginForm extends Component {

  state = {
    error: null,
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({error: null})
    TokenService.saveAuthToken('abc123')
    this.props.onLoginSuccess()
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
    
  render() {
    return (
      <form className='js-login-form' action='#' onSubmit={(e) => this.handleSubmit(e)}>
        <div className='error-msg'>{this.state.error}</div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='text' value={this.state.email} onChange={this.handleChange}/>
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
        </div>

        <div className='form-controls'>
          <button className='button' type='submit'>Login</button>
        </div>
      </form>
    )
  }
}
  