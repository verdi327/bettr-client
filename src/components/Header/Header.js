import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
  
export default class Header extends Component {
  render() {
    return (  
      <nav role='navigation'>
        <p><Link to='/'>Landing Page</Link></p>
        <p><Link to='/login'>Login Page</Link></p>
        <p><Link to='/register'>Registration Page</Link></p>
        <p><Link to='/new-cycle'>New Cycle Page</Link></p>
        <p><Link to='/workouts'>Workouts Page</Link></p>
        <p><Link to='/workouts/1'>Workout Page</Link></p>
      </nav>
    )
  }
}
  