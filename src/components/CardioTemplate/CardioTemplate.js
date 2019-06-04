import React, {Component} from 'react';
import './CardioTemplate.css';
import {renderMainWorkout} from '../Utils/Utils'
  
export default class CardioTemplate extends Component {
  render() {
    const {workout} = this.props
    return (
      <>
        <div className='workout-group'>
          <h3>Warm Up</h3>
          <p>{workout.warm_up}</p>
        </div>

        <div className='workout-group'>
          <h3>Main</h3>
          {renderMainWorkout(workout.main[0])}
        </div>
      </>
    )
  }
}
  