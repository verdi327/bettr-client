import React, {Component} from 'react';
import './AppError.css';
  
export default class AppError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {      
      return (
        <div className='unexpected-error'>
          <div className='top'>
            <span role='img' aria-label='bad news icon' className='emoji'>🤯</span>
            <h2>An Error Has Occurred</h2>
            <h4>Our development team has been notified. We'll get this fixed ASAP.</h4>
          </div>
          
          <div className='bottom'>
            <h4>try refreshing the page</h4>
            <i className="fas fa-sync-alt"></i>
          </div>
        </div>

      );
    }
    return this.props.children;
  } 
}
  