import React, { Component } from 'react'
import './WorkoutPage.css'
import Workouts from '../../store'
import WeightsTemplate from '../../components/WeightsTemplate/WeightsTemplate'
import CardioTemplate from '../../components/CardioTemplate/CardioTemplate'
import HybridTemplate from '../../components/HybridTemplate/HybridTemplate'
import RestTemplate from '../../components/RestTemplate/RestTemplate'


export default class WorkoutPage extends Component {
  state = {
    workout: {},
    tabActive: 'Details'
  }

  componentDidMount() {
    const {match} = this.props
    const workout_id = Number(match.params.workout_id)
    const foundWorkout = Workouts.detailed.find(workout => workout.id === workout_id)
    this.setState({workout: {...foundWorkout}})
  }

  setActive = (e) => {
    this.setState({tabActive: e.target.innerHTML})
  }

  setButtonText(workout){
    return workout.completed ? 'Mark Incomplete' : 'Mark Complete'
  }

  renderWorkoutDetails = () => {
    const {workout} = this.state;
    switch(workout.type){
      case 'weights': return < WeightsTemplate workout={workout} />
      case 'cardio': return < CardioTemplate workout={workout}/>
      case 'hybrid': return < HybridTemplate workout={workout} />
      default: return < RestTemplate workout={workout} />
    }
  }

  renderWorkoutFocus = () => {
    return (
      <p className='workout-focus'>
        {this.state.workout.focus}
      </p>
    )
  }

  render() {
    const {workout, tabActive} = this.state
    return (
      <section className='WorkoutPage'>
        <div className='workout-day-header'>
          Day {workout.day} of 56
        </div>
        <div className='workout-sub-nav'>
          <button className={`button full ${tabActive === 'Details' ? 'tabActive' : ''}`} onClick={this.setActive}>Details</button>
          <button className={`button full ${tabActive === 'Focus' ? 'tabActive' : ''}`} onClick={this.setActive}>Focus</button>
        </div>
        <section>
          {tabActive === 'Details'
            ? this.renderWorkoutDetails()
            : this.renderWorkoutFocus()
          }
          <div className='mark-complete' style={tabActive === 'Focus' ? {display: 'none'} : {display: 'block'}}>
            <button className='button full'>{this.setButtonText(workout)}</button>
          </div>
        </section>
      </section>
    )
  }
}