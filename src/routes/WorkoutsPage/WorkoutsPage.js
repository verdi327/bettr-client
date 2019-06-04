import React, { Component } from 'react'
import './WorkoutsPage.css'
import WorkoutListItem from '../../components/WorkoutListItem/WorkoutListItem'
import {Redirect} from 'react-router-dom'
import WorkoutApiService from '../../services/workout-api-service'

export default class WorkoutsPage extends Component {
  state = {
    workouts: null,
    week: 1,
    error: null
  }

  async componentDidMount() {
    try {
      const response = await WorkoutApiService.list()
      this.setState({workouts: response.workouts, week: response.week})
    } catch(err) {
      this.setState({error: err.message})
    }
  }

  findActive = () => {
    return this.state.workouts.find(workout => !workout.completed && workout.type !== 'rest')
  }

  renderWorkoutList = () => {
    const {workouts} = this.state
    if (workouts) {
      return workouts.map(workout => {
        return <WorkoutListItem workout={workout} key={workout.id} active={workout === this.findActive()}/>
      })
    }
  }

  renderPaginationLinks = () => {
    const {week} = this.state
    if (week === 1) {
      return <button className='button full'>View Next Week</button>
    } else if (week > 1 && week < 12) {
      return (
        <>
          <button className='button full'>View Prev Week </button>
          <button className='button full'>View Next Week </button>
        </>
      )
    } else {
      return (
        <>
          <button className='button full'>View Prev Week</button>
          <button className='button full'>Complete Cycle</button>
        </>
      )
    }
  }


  render() {
    const {workouts, week} = this.state;
    if (workouts && !workouts.length) {
      return <Redirect to='/new-cycle' />
    } else {
      return (
        <section className='WorkoutsPage'>
          <div className='workout-week-header'>
            Week {week} of 12
          </div>
          {this.renderWorkoutList()}
          <div className='pagination'>
            {this.renderPaginationLinks()}
          </div>
        </section>
      )
    }
  }
}

