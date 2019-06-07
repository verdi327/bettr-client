import React from 'react';
import './PageError.css';
  
export default function PageError(props) {
  return (
    <div className='page-error'>
      <span role='img' aria-label='bad news icon' className='emoji'>😞</span>
      <h4>Oh no!</h4>
      <p>
        There was an error when trying to fetch your {props.page} page.
      </p>
      <p>
        Our development team has been notified, we'll get on this ASAP!
      </p>
      <p>
        Try logging out and back in to see if the problem resolves itself.
      </p>
    </div>
  )
}
