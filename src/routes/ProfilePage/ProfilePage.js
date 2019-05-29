import React, { Component } from 'react'
import './ProfilePage.css'
// import gravatar from 'gravatar'

export default class ProfilePage extends Component {
  // const g = gravatar.url('michael.v.verdi@gmail.com', {s: '200', r: 'x', d: 'retro', protocol: 'https'}, true);

  state = {
    currentUser: {full_name: 'Michael Verdi', sex: 'male', training_freq: '4', training_exp: 'adv', avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'},
    currentCycle: {day: '15', phase: 'volume', completed_percent: '27'}
  }
  
  componentDidMount(){
    // ajax call to backend
  }

  render() {
    const {currentUser, currentCycle} = this.state
    return (
      <section className='ProfilePage content'>
        <div className='user-info'>
          <div><img src={currentUser.avatar} className='round' alt='profile'/></div>
          <div><h3>{currentUser.full_name}</h3></div>
          <div className='user-details'>
            <span>{currentUser.sex}</span>&nbsp;|&nbsp;
            <span>{currentUser.training_freq}x per week</span>&nbsp;|&nbsp;
            <span>{currentUser.training_exp}</span>
          </div>
          
        </div>

        <div className='cycle-info'>
          <div className='sub-header'>
            <h3>Current Cycle Stats</h3>
          </div>
          <div className='cycle-stats'>
            <div className='card'>
              <div className='card-header'>Day</div>
              <div className='card-body'>{currentCycle.day}</div>
            </div>
            <div className='card'>
              <div className='card-header'>Phase</div>
              <div className='card-body'>{currentCycle.phase}</div>
            </div>
            <div className='card'>
              <div className='card-header'>Completion</div>
              <div className='card-body'>{currentCycle.completed_percent}%</div>
            </div>
          </div>
          
        </div>
      </section>
    )
  }
}