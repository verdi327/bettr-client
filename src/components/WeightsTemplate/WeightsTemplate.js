import React, {Component} from 'react';
import './WeightsTemplate.css';
  
// {
//   id: 1,
//   day: 1,
//   type: 'weights',
//   sub_type: 'power',
//   completed: false,
//   warm_up: 'Spend at least 10 minutes to warm up properly. Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. You should break a slight sweat. Finally, do a few light sets of the movements you will be completing in the main workout block.',
//   main: ['Reverse Med Ball Throws'],
//   main_sets: '7-10',
//   main_rest: 'as needed',
//   main_reps: '2-3',
//   acc: ['Goblet Squat', 'Dumbbell Bench Press', 'Double KB Snatch'],
//   acc_sets: '3-4',
//   acc_reps: '10-15',
//   acc_rest: '1-2 minutes'
// }

export default class WeightsTemplate extends Component {
  renderMain = (workout) => {
    const details =  workout.main.map((exercise, i) => {
      return (
        <p key={i}>{workout.main_reps} {exercise}</p>
      )
    })

    details.push(<p key={details.length}>rest {workout.main_rest}</p>)
    details.push(<p key={details.length+1}>x {workout.main_sets} sets</p>)
    return details
  }

  renderAcc = (workout) => {
    const details =  workout.acc.map((exercise, i) => {
      let reps = workout.acc_reps
      if (/carry/i.test(exercise)) {
        reps = workout.acc_distance
      } else if (/plank/i.test(exercise)) {
        reps = workout.acc_time
      }
      return (
        <p key={i}>{reps} {exercise}</p>
      )
    })

    details.push(<p key={details.length}>rest {workout.acc_rest}</p>)
    details.push(<p key={details.length+1}>x {workout.acc_sets} sets</p>)
    return details
  }

  render() {
    const {workout} = this.props
    return (
      <>
        <div className='workout-group'>
          <h3>Warm Up</h3>
          {workout.warm_up}
        </div>

        <div className='workout-group'>
          <h3>Main</h3>
          {this.renderMain(workout)}
        </div>

        <div className='workout-group'>
          <h3>Accessory</h3>
          {this.renderAcc(workout)}
        </div>
      </>
    )
  }
}
  