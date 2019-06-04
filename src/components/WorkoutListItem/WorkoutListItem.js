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

    if (workout.completed) {
      klass += ' completed'
    } else if (this.props.active) {
      klass += ' active'
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
          <h4>{this.capitalize(workout.type)}</h4>
        </div>
        <div className='workout-subtype'>
          <h4>{this.capitalize(workout.sub_type)}</h4>
        </div>
      </Link>
    )
  }
}
  