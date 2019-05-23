import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <div className='left'>
          <div className='left-wrapper'>
            <h2>Tired of feeling like you're not making progress?</h2>
            <p>bettr.fit delivers personalized fitness programs based on science</p>
            <Link to='/login'>
              <button className='button'>Login</button>
            </Link>
            <Link to='/register'>
              <button className='button'>Create an Account</button>
            </Link>
          </div>
        </div>
        <div className='right'>
          <img src='https://videotron.com/vtrn/images/resi/mobilite/appareils/telephones/app-iphone-x/res-app-iphone-x-vig-01-argent_1200x1200_en.png' alt='iphone'></img>
        </div>
      </div>
    )
  }
}
