import React, { Component } from 'react'
import AuthContext from '../../contexts/AuthContext'
import NewCycleForm from '../../components/NewCycleForm/NewCycleForm'
import {firstName} from '../../components/Utils/Utils'
import { Redirect } from 'react-router-dom'

export default class NewCyclePage extends Component {
  static contextType = AuthContext

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleCycleSuccess = (workouts) => {
    const { history } = this.props
    history.push('/workouts')
  }

  render() {
    const {currentUser} = this.context;
    if (!currentUser) {
      return <></>
    } else if (currentUser.hasCurrentCycle) {
      return < Redirect to='/workouts' />
    } else {
      return (
        <section className='NewCyclePage content'>
          <h2>Hi, {currentUser ? firstName(currentUser.full_name) : ''}</h2>
          <p className='tagline'>Let's build you a new training plan</p>
  
          <NewCycleForm onCycleSuccess={this.handleCycleSuccess}/>
  
        </section>
      )
    }
  }
}