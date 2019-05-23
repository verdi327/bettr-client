import React, { Component } from 'react'
import AppContext from '../../contexts/AppContext'
import NewCycleForm from '../../components/NewCycleForm/NewCycleForm'

export default class NewCyclePage extends Component {
  static contextType = AppContext

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
    
    return (
      <section className='NewCyclePage'>
        <h2>Hi, John</h2>
        <p>Let's build you a new personalized training plan</p>

        <NewCycleForm onCycleSuccess={this.handleCycleSuccess}/>

      </section>
    )
  }
}