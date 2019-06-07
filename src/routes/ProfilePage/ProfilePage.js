import React, { Component } from 'react'
import './ProfilePage.css'
import gravatar from 'gravatar'
import UserApiService from '../../services/user-api-service'
import { withAuthContext } from '../../contexts/AuthContext'
import { withAppContext } from '../../contexts/AppContext'
import PageError from '../../components/PageError/PageError'

class ProfilePage extends Component {
  
  state = {
    user: {},
    currentCycle: {},
    error: null
  }

  async componentDidMount() {
    if (this.props.authContext.currentUser) {
      const user_id = this.props.authContext.currentUser.id
      const {setLoading} = this.props.appContext
      try {
        setLoading(true)
        const res = await UserApiService.getProfile(user_id)
        this.setState({user: res.currentUser, currentCycle: res.currentCycle}, setLoading(false))
      } catch(err) {
        this.setState({error: err.message}, setLoading(false))
      }
    }
  }

  async componentDidUpdate(prevProps, prevContext) {
    if (prevProps.authContext.currentUser === null
        && this.props.authContext.currentUser !== null) {
          const {setLoading} = this.props.appContext
          setLoading(true)
          const user_id = this.props.authContext.currentUser.id
          try {
            const res = await UserApiService.getProfile(user_id)
            this.setState({user: res.currentUser, currentCycle: res.currentCycle}, setLoading(false))
          } catch(err) {
            this.setState({error: err.message}, setLoading(false))
          }
    }
  }

  componentWillUnmount() {
    this.setState({error: null})
  }

  avatar(email) {
    return gravatar.url(email, {s: '200', r: 'x', d: 'retro', protocol: 'https'}, true);
  }

  render() {
    if (this.state.error) {
      return <PageError page='profile' />
    } else if (!this.props.authContext.currentUser) {
      return <></>
    } else {
      const email = this.props.authContext.currentUser.email
      const {user, currentCycle} = this.state
      return (
        <section className='ProfilePage content'>
          <div className='user-info'>
            <div><img src={this.avatar(email)} className='round' alt='profile'/></div>
            <div><h2>{user.full_name}</h2></div>
            <div className='user-details'>
              <span>{user.sex}</span>&nbsp;|&nbsp;
              <span>{user.training_freq}x per week</span>&nbsp;|&nbsp;
              <span>{user.training_exp}</span>
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
}

export default withAuthContext(withAppContext(ProfilePage))