import React, { Component } from 'react'
import './WorkoutPage.css'
import WeightsTemplate from '../../components/WeightsTemplate/WeightsTemplate'
import CardioTemplate from '../../components/CardioTemplate/CardioTemplate'
import HybridTemplate from '../../components/HybridTemplate/HybridTemplate'
import RestTemplate from '../../components/RestTemplate/RestTemplate'
import WorkoutApiService from '../../services/workout-api-service';


export default class WorkoutPage extends Component {
  state = {
    workout: {},
    tabActive: 'Details'
  }

  async componentDidMount() {
    const {match} = this.props
    const workout_id = Number(match.params.workout_id)
    const workout = await WorkoutApiService.show(workout_id);
    this.setState({workout})
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

  toggleMarkComplete = () => {
    // need to make ajax call and update backend

    let workout = this.state.workout
    workout.completed = !workout.completed
    this.setState({
      workout: {...workout}
    }, this.redirectToWorkoutsPage)
  }

  redirectToWorkoutsPage() {
    const { history } = this.props
    history.push('/workouts')
  }

  renderMarkComplete = () => {
    const {workout, tabActive} = this.state

    if (tabActive === 'Focus' || workout.type === 'rest') {
      return <></>
    } else {
      return (
        <div className='mark-complete'>
          <button className='button full' onClick={this.toggleMarkComplete}>{this.setButtonText(workout)}</button>
        </div>
      )
    }
  }

  render() {
    const {workout, tabActive} = this.state
    return (
      <section className='WorkoutPage'>
        <div className='workout-day-header'>
          <span>Day {workout.day} of 84</span>&nbsp;-&nbsp;
          <span>{workout.type} {workout.sub_type}</span>
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
          {this.renderMarkComplete()}
        </section>
      </section>
    )
  }
}