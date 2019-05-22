import React, {Component} from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
import './Sidebar.css';
  
export default class Sidebar extends Component {
  state = {
    isOpen: false
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

  render() {
    return (
      <Menu
        {...this.props}
        isOpen={this.state.isOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link onClick={() => this.closeMenu()}  to='/workouts'>Workouts</Link>
        <Link onClick={() => this.closeMenu()}  to='/profile'>Profile</Link>
        <Link onClick={() => this.closeMenu()}  to='/logout'>Logout</Link>
      </Menu>
    )
  }
}
  