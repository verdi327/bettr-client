import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import './landing-page-bg-1.png'
import './quote-aside-bg.png'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <section id='above-the-fold'>
          <div className='hero'>
            <h1>Routine</h1>
            <h1 className='small'>Is The</h1>
            <h1>Enemy</h1>
          </div>

          <div className='details'>
            <p>
              <span>bettr</span> uses the latest evidence based training principles to build fully customized 12 week training programs
            </p>
            <p>
              A bettr plan is one that balances strength and cardio training while optimizing for efficiency, aesthetic and quality of movement.
            </p>
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
        
        <section id='about'>
          <div className='section-header'>
            <h2>Backed</h2>
            <h2>By</h2>
            <h2>Science.</h2>
          </div>
          <div className='section-content'>
            <div>
              <h4>What</h4>
              <p>
                The bettr algorithm was developed to make smarter training accessible to everybody. With so much information freely available on the internet, it's hard to decipher real training principles from anecdotes, half truths and outright lies. While developing a good training plan isn't rocket science, it does take time, effort and awareness of your own biases. The bettr algorithm will keep your training varied, effective and honest.
              </p>
            </div>
            <div>
              <h4>How</h4>
              <p>
                The bettr algorithm creates a 12 week mesocycle that progesses load and intensity every four weeks. A four week period is a macrocycle which starts with more volume and then builds intensity with each subsequent four week period. Within a macrocycle, the algorithm follows daily undulation which means you'll complete hypertrophy, strength and power workouts every week. Sets, reps and loading are all prescribed within ranges to allow for auto regulation and longevity. Every workout has a specified warm-up, focus and exercise demonstrations.
              </p>
            </div>

            <div>
              <h4>Who</h4>
              <p>
                The bettr algorithm is not for everyone. If you have a specific training goal with a specific deadline or you're brand new to training, you're much better off working with a coach who can design a more personalized plan. But, if you're like most of the training population that wants workouts under 60 minutes that offer variety and balance looking good naked, performance and longevity - bettr is made for you.
              </p>
            </div>
          </div>
        </section>
        
        <aside>
          <div className='quote'>
            If you're looking to optimize for body composition, performance and longevity - bettr delivers.
          </div>
        </aside>

        <section id='cta'>
          <div className='section-header'>
            <h2>Ready</h2>
            <h2>Set</h2>
            <h2>Go.</h2>
          </div>
          <div className='section-content'>
            <p>
              If you're looking for a balanced fitness program that just works, sign up below. A bettr training plan will get you fantastic results that aim to keep you looking good and feeling great. Your plan is tailored to your training level and your training availability. If you've made it this far, you're definitely bettr material.
            </p>

            <Link to='/register'>
              <button className='button full primary-variant'>Register</button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}
