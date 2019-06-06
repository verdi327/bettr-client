import React, {Component} from 'react';
import './Sidebar.css';
import { slide as Menu } from "react-burger-menu";
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
  
export default class Sidebar extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: false,
    toLogin: false
  }

  handleStateChange = (state) => {
    this.setState({isOpen: state.isOpen})
  }

  closeMenu = () => {
    this.setState({isOpen: false})
  }

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  logoutUser = () => {
    this.context.logout();
    this.setState({
      isOpen: false,
      toLogin: true
    })
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to='/login'/>
    } else {
      return (
        <Menu
          {...this.props}
          isOpen={this.state.isOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link onClick={() => this.closeMenu()}  to='/workouts'>
            <i className="fas fa-dumbbell"></i>
            Workouts
          </Link>
          <Link onClick={() => this.closeMenu()}  to='/profile'>
            <i className="fas fa-user-circle"></i>
            Profile
          </Link>
          <Link className='logout-link' onClick={() => this.logoutUser()} to='#'>
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </Link>
        </Menu>
      )
    }
  }
}
  