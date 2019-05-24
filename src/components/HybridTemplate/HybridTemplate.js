import React, {Component} from 'react';
import './HybridTemplate.css';
  
export default class HybridTemplate extends Component {
  renderMain = (workoutStr) => {
    const lines = workoutStr.split(',')
    return lines.map((line, i) => {
      if (line.trim() === '') {
        return <p className='spacer' key={i}>{line}</p>
      } else {
        return <p key={i}>{line}</p>
      }
      
    })
  }

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
          {this.renderMain(workout.main)}
        </div>
      </>
    )
  }
}
  