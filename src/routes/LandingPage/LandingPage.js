import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import './landing-page-bg-1.png'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <section id='above-the-fold'>
          <div className='hero'>
            <h1>Routine</h1>
            <h1 className='small'>Is The</h1>
            <h1>Enemy</h1>

            <div className='details'>
              <p>
                <span>bettr</span> uses the latest evidence based training principles to build fully customized 12 week training programs
              </p>
              <p>
                A bettr plan is one that balances strength and cardio training while optimizing for efficiency, aesthetic and quality of movement.
              </p>
            </div>
          </div>

          <div className='cta-buttons'>
            <Link to='/login'>
              <button className='button full'>Login</button>
            </Link>
            <Link to='/register'>
              <button className='button full'>Register</button>
            </Link>
          </div>
          
        </section>
        

        
      </div>
    )
  }
}
