import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
  
export default class Header extends Component {
  render() {
    return (  
      <nav role='navigation'>
        <Link to='/workouts' className='logo'>
          Bettr
        </Link>
        
        {/* <ul>
          <li><Link to='/login'>Login Page</Link></li>
          <li><Link to='/register'>Registration Page</Link></li>
          <li><Link to='/workouts'>Workouts Page</Link></li>
        </ul> */}
      </nav>
    )
  }
}
  