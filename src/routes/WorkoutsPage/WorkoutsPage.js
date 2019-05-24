import React, { Component } from 'react'
import './WorkoutsPage.css'
import Workouts from '../../store'
import WorkoutListItem from '../../components/WorkoutListItem/WorkoutListItem'

//api needs to return paginated list of 7 workouts
//api needs to return the week


export default class WorkoutsPage extends Component {
  state = {
    workouts: Workouts.three.slice(0, 7),
    week: 2
  }

  findActive = () => {
    return this.state.workouts.find(workout => !workout.completed && workout.type !== 'rest')
  }

  renderWorkoutList = () => {
    return this.state.workouts.map(workout => {
      return <WorkoutListItem workout={workout} key={workout.id} active={workout === this.findActive()}/>
    })
  }

  renderPaginationLinks = () => {
    const {week} = this.state
    if (week === 1) {
      return <button className='button full'>View Next Week</button>
    } else if (week > 1 && week < 8) {
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
    const {week} = this.state
    return (
      <section className='WorkoutsPage'>
        <div className='workout-week-header'>
          Week {week} of 8
        </div>
        {this.renderWorkoutList()}
        <div className='pagination'>
          {this.renderPaginationLinks()}
        </div>
      </section>
    )
  }
}