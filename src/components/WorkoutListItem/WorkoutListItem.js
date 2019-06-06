import React, {Component} from 'react';
import './WorkoutListItem.css';
import {Link} from 'react-router-dom'
  
export default class WorkoutListItem extends Component {
  capitalize = (word) => {
    if (word) {
      return word[0].toUpperCase() + word.slice(1, word.length)
    }
  }

  setClass = (workout) => {
    let klass = 'WorkoutListItem'

    if (workout.completed && workout.type !== 'rest') {
      klass += ' completed'
    } else if (this.props.active) {
      klass += ' active'
    } else if (workout.type === 'rest') {
      klass += ' rest-day'
    }
    return klass
  }

  render() {
    const {workout} = this.props
    return (
      <Link to={`/workouts/${workout.id}`} className={this.setClass(workout)}>
        <div className='workout-day'>
          Day {(workout.week*7) - (7-workout.day)}
        </div>
        <div className='workout-type'>
          <div>{workout.type}</div>
          <div>{workout.sub_type}</div>
        </div>
        <div className='workout-status'>
          <i className="fas fa-check"></i>
        </div>
      </Link>
    )
  }
}
  