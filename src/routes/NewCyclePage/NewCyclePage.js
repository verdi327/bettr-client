import React, { Component } from 'react'
import AuthContext from '../../contexts/AuthContext'
import NewCycleForm from '../../components/NewCycleForm/NewCycleForm'
import {firstName} from '../../components/Utils/Utils'

export default class NewCyclePage extends Component {
  static contextType = AuthContext

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleCycleSuccess = () => {
    const { history } = this.props
    history.push('/workouts')
  }

  render() {
    const {currentUser} = this.context;
    return (
      <section className='NewCyclePage content'>
        <h2>Hi, {firstName(currentUser.full_name)}</h2>
        <p>Let's build you a new personalized training plan</p>

        <NewCycleForm onCycleSuccess={this.handleCycleSuccess}/>

      </section>
    )
  }
}