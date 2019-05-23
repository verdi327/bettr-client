import React, {Component} from 'react';
import './Sidebar.css';
import { slide as Menu } from "react-burger-menu";
import { Link, Redirect } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import AppContext from '../../contexts/AppContext'
  
export default class Sidebar extends Component {
  static contextType = AppContext;

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
    TokenService.clearAuthToken();
    this.setState({
      isOpen: false,
      toLogin: true
    }, this.context.updateSidebar())
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
          <Link onClick={() => this.closeMenu()}  to='/workouts'>Workouts</Link>
          <Link onClick={() => this.closeMenu()}  to='/profile'>Profile</Link>
          <Link onClick={() => this.logoutUser()} to='#'>Logout</Link>
        </Menu>
      )
    }
  }
}
  