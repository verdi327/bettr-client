import React, { Component } from 'react'
import './WorkoutsPage.css'
import WorkoutListItem from '../../components/WorkoutListItem/WorkoutListItem'
import {Redirect} from 'react-router-dom'
import WorkoutApiService from '../../services/workout-api-service'
import { withAppContext } from '../../contexts/AppContext'
import PageError from '../../components/PageError/PageError'

class WorkoutsPage extends Component {
  state = {
    workouts: null,
    week: 1,
    activeWorkoutId: -1,
    error: null
  }

  async componentDidMount() {
    const {setLoading} = this.props.appContext
    try {
      setLoading(true);
      const response = await WorkoutApiService.list()
      const {workouts, week, activeWorkoutId} = response
      this.setState({workouts, week, activeWorkoutId}, setLoading(false))
    } catch(err) {
      this.setState({error: err.message}, setLoading(false))
    }
  }

  componentWillUnmount() {
    const {setLoading} = this.props.appContext
    setLoading(false)
    this.setState({error: null})
  }

  renderWorkoutList = () => {
    const {workouts, activeWorkoutId} = this.state
    if (workouts) {
      return workouts.map(workout => {
        return <WorkoutListItem workout={workout} key={workout.id} active={workout.id === activeWorkoutId}/>
      })
    }
  }

  renderPaginationLinks = () => {
    const {week} = this.state
    if (week === 1) {
      return <button onClick={() => this.fetchWorkouts(week+1)} className='button primary-variant large'>
        Next Week
        <i className="fas fa-arrow-right"></i>
      </button>
    } else if (week > 1 && week < 12) {
      return (
        <>
          <button onClick={() => this.fetchWorkouts(week-1)} className='button primary-variant large'>
            <i className="fas fa-arrow-left"></i>
            Prev Week
          </button>
          <button onClick={() => this.fetchWorkouts(week+1)} className='button primary-variant large'>
            Next Week
            <i className="fas fa-arrow-right"></i>
          </button>
        </>
      )
    } else {
      return (
        <>
          <button onClick={() => this.fetchWorkouts(week-1)} className='button primary-variant large'>
            <i className="fas fa-arrow-left"></i>
            Prev Week
          </button>
          <button onClick={this.markCycleComplete} className='button primary-variant large'>
            <i className="fas fa-check"></i>
            Complete
          </button>
        </>
      )
    }
  }

  async fetchWorkouts(week) {
    const {setLoading} = this.props.appContext
    try {
      setLoading(true)
      const response = await WorkoutApiService.list(week)
      this.setState({workouts: response.workouts, week: response.week}, setLoading(false))
    } catch(err) {
      this.setState({error: err.message}, setLoading(false))
    }
  }

  markCycleComplete = async () => {
    const cycle_id = this.state.workouts[0].cycle_id;
    const {setLoading} = this.props.appContext

    try {
      setLoading(true)
      await WorkoutApiService.markCycleComplete(cycle_id)
      this.props.history.push('/completed-cycle')
    } catch(err) {
      this.setState({error: err.message}, setLoading(false))
    }
  }


  render() {
    const {workouts, week, error} = this.state;
    if (error) {
      return <PageError page='workouts'/>
    } else if (workouts && !workouts.length) {
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

export default withAppContext(WorkoutsPage);