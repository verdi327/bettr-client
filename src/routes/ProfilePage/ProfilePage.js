import React, { Component } from 'react'
import './ProfilePage.css'
import gravatar from 'gravatar'
import UserApiService from '../../services/user-api-service'
import AuthContext from '../../contexts/AuthContext'

export default class ProfilePage extends Component {
  static contextType = AuthContext
  
  state = {
    currentUser: {},
    currentCycle: {}
  }
  
  async componentDidMount(){
    const user_id = this.context.currentUser.id
    try {
      const res = await UserApiService.getProfile(user_id)
      this.setState({currentUser: res.currentUser, currentCycle: res.currentCycle})
    } catch(err) {
      this.setState({error: err.message})
    }
  }

  avatar(email) {
    return gravatar.url(email, {s: '200', r: 'x', d: 'retro', protocol: 'https'}, true);
  }

  render() {
    const email = this.context.currentUser.email
    const {currentUser, currentCycle} = this.state
    return (
      <section className='ProfilePage content'>
        <div className='user-info'>
          <div><img src={this.avatar(email)} className='round' alt='profile'/></div>
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