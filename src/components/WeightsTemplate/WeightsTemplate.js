import React, {Component} from 'react';
import './WeightsTemplate.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import ExerciseApiService from '../../services/exercise-api-service'
import YouTube from 'react-youtube';
  
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

Modal.setAppElement('#root');

export default class WeightsTemplate extends Component {
  state = {
    modalIsOpen: false,
    videoId: null,
    error: null,
    selectedExercise: null
  }

  linkify = (exercise) => {
    return (
      <Link className='exercise-title' to='#' onClick={() => this.fetchDemoVid(exercise)}>{exercise}</Link>
    )
  }

  // "https://www.youtube.com/watch?v=m4ytaCJZpl0"
  // 'https://www.youtube.com/watch?v=M2rwvNhTOu0&feature=youtu.be&t=16'
  
  extractVideoId = (url) => {
    let results = url.split('v=')
    if (results[1].includes('feature')) {
      return results[1].split('&')[0]
    } else {
      return results[1]
    }
  }

  fetchDemoVid = async (exercise) => {
    try {
      const res = await ExerciseApiService.fetchDemoVideo(exercise)
      const demoUrl = res.demo_url
      const videoId = this.extractVideoId(demoUrl);
      this.setState({videoId, selectedExercise: exercise}, this.openModal)
    } catch(err) {
      this.setState({error: `Unable to fetch the demo video for ${exercise}`}, this.openModal)
    } 
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  renderMain = (workout) => {
    const details =  workout.main.map((exercise, i) => {
      return (
        <p key={i}>{workout.main_reps} {this.linkify(exercise)}</p>
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
        <p key={i}>{reps} {this.linkify(exercise)}</p>
      )
    })

    details.push(<p key={details.length}>rest {workout.acc_rest}</p>)
    details.push(<p key={details.length+1}>x {workout.acc_sets} sets</p>)
    return details
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const {workout} = this.props
    return (
      <>
        <div className='workout-group'>
          <h3>Warm Up</h3>
          {workout.warm_up}
        </div>

        <div className='workout-group main'>
          <h3>Main</h3>
          {this.renderMain(workout)}
        </div>

        <div className='workout-group acc'>
          <h3>Accessory</h3>
          {this.renderAcc(workout)}
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          className='exercise-modal-content'
          overlayClassName='exercise-modal-overlay'
          onRequestClose={this.closeModal}
          contentLabel='Exercise Demo'
        >
          <div className='modal-content'>
            <h2>{this.state.selectedExercise}</h2>
            <YouTube
              videoId={this.state.videoId}
              opts={{height: '300', width: '335', playerVars: {autoplay: 1}}}
              onReady={this._onReady}
            />
            <button className='button full outline' onClick={this.closeModal}>
              Close
            </button>
          </div>
          
        </Modal>
      </>
    )
  }
}
  