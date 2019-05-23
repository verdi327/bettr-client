import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
  
export default class Header extends Component {
  render() {
    return (
      <header className="app-header" role='banner'>
        <nav role='navigation'>
          <Link to='/workouts' className='logo'>
            bettr
          </Link>
        </nav>
      </header>
    )
  }
}
  