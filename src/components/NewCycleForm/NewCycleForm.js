import React, {Component} from 'react';
import './NewCycleForm.css';
import WorkoutApiService from '../../services/workout-api-service';
import { withAppContext } from '../../contexts/AppContext';
  
class NewCycleForm extends Component {
  state = {
    error: null,
    training_freq: '',
    training_exp: '',
    injuries: [],
    part: 1
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({error: null})
    const {training_exp, training_freq, injuries} = this.state;
    const newCycle = {training_exp, training_freq, injuries};
    try {
      const {setLoading} = this.props.appContext
      setLoading(true)
      await WorkoutApiService.createCycle(newCycle)
      setLoading(false)
      this.props.onCycleSuccess()
    } catch(err) {
      this.setState({error: err.message})
    }
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  handleInjuryChange = (e) => {
    const value = e.target.value
    let injuries = [...this.state.injuries]

    if (value === 'none') {
      injuries = ['none']
    }  else if (value !== 'none' && injuries.includes('none')) {
      injuries = [value]
    } else if (injuries.includes(value)) {
      injuries = injuries.filter(injury => injury !== value)
    } else {
      injuries.push(value)
    }

    this.setState({injuries})
  }

  isInjured = (injury) => {
    return this.state.injuries.includes(injury)
  }

  updateFormView = (part) => {
    this.setState({part})
  }

  renderPartOneForm = () => {
    return (
      <>
        <div className='form-group'>
          <fieldset id='training_freq'>
            <legend>Training Frequency</legend>
            <div className='details'>
              In an average week, how often do you like to workout?
            </div>
            <label>
              <input type='radio' name='training_freq' value='3' onChange={this.handleChange} checked={this.state.training_freq === '3'} required/>
              3 x per week
            </label>
            <label>
              <input type='radio' name='training_freq' value='4' onChange={this.handleChange} checked={this.state.training_freq === '4'} required/>
              4 x per week
            </label>
            <label>
              <input type='radio' name='training_freq' value='5' onChange={this.handleChange} checked={this.state.training_freq === '5'} required/>
              5 x per week
            </label>
          </fieldset>
        </div>
        <div className='form-controls'>
          <button onClick={() => this.updateFormView(this.state.part+1)} className='button full outline'>
            Next
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </>
    )
  }

  renderPartTwoForm = () => {
    return (
      <>
        <div className='form-group'>
          <fieldset id='training_exp'>
            <legend>Training Experience</legend>
            <div className='details'>
              Ego aside, think about your overall training experience.
              <div>
                <h4>Beginner</h4>
                <p>You've trained consistently with weights for less than a year and still need practice in learning good form</p>
              </div>
              
              <div>
                <h4>Intermediate</h4>
                <p>You've trained consistently with weights for 1-3 years but are unable to make progress as quickly as you did as a beginner</p>
              </div>
              
              <div>
                <h4>Advanced</h4>
                <p>You've trained consistently with weights for 3+ years and have mastered the technical details of the lifts</p>  
              </div>
            </div>
            <label>
              <input type='radio' name='training_exp' value='beg' onChange={this.handleChange} checked={this.state.training_exp === 'beg'} required/>
              Beginner
            </label>
            <label>
              <input type='radio' name='training_exp' value='int' onChange={this.handleChange} checked={this.state.training_exp === 'int'} required/>
              Intermediate - most of us
            </label>
            <label>
              <input type='radio' name='training_exp' value='adv' onChange={this.handleChange} checked={this.state.training_exp === 'adv'} required/>
              Advanced
            </label>
          </fieldset>
        </div>
        <div className='form-controls'>
          <button onClick={() => this.updateFormView(this.state.part-1)} className='button full outline'>
            <i className="fas fa-arrow-left"></i>
            Prev
          </button>
          <button onClick={() => this.updateFormView(this.state.part+1)} className='button full outline'>
            Next
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </>
    )
  }

  renderPartThreeForm = () => {
    return (
      <>
        <div className='form-group'>
          <fieldset id='injuries'>
            <legend>Injuries</legend>
            <div className='details'>
              Please select any injuries that prevent you from doing specific movements.
              <div>
                <h4>*Disclaimer</h4>
                <p>Our current training algorithm does not take injuries into account when designing your program. We track this data now so we can include this feature in later releases.</p>  
              </div>
            </div>
            <label>
              <input type='checkbox' name='injuries' value='shoulder' checked={this.isInjured('shoulder')} onChange={this.handleInjuryChange}/>
              Shoulders - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='hip' checked={this.isInjured('hip')} onChange={this.handleInjuryChange}/>
              Hips - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='knee' checked={this.isInjured('knee')} onChange={this.handleInjuryChange}/>
              Knees - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='ankle' checked={this.isInjured('ankle')} onChange={this.handleInjuryChange}/>
              Ankles - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='lower_back' checked={this.isInjured('lower_back')} onChange={this.handleInjuryChange}/>
              Lower Back
            </label>
            <label>
              <input type='checkbox' name='injuries' value='upper_back' checked={this.isInjured('upper_back')} onChange={this.handleInjuryChange}/>
              Upper Back
            </label>
            <label>
              <input type='checkbox' name='injuries' value='none' checked={this.isInjured('none')} onChange={this.handleInjuryChange}/>
              No limiting injuries
            </label>
          </fieldset>
        </div>
        <div className='form-controls'>
          <button onClick={() => this.updateFormView(this.state.part-1)} className='button full outline'>
            <i className="fas fa-arrow-left"></i>
            Prev
          </button>
          <button onClick={() => this.updateFormView(this.state.part+1)} className='button full outline'>
            Next
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </>
    )
  }

  renderPartFourForm = () => {
    const {training_exp, training_freq, injuries} = this.state;
    let injuryStr = '';
    if (injuries[0] === 'none') {
      injuryStr = 'no limiting injuries'
    } else {
      injuryStr = `an injured ${injuries.join(', ')} that you need to work around`
    }

    let expStr = ''
    if (training_exp === 'beg') {
      expStr = 'a beginner trainee'
    } else if (training_exp === 'int') {
      expStr = 'an intermediate trainee'
    } else {
      expStr = 'an advanced trainee'
    }

    return (
      <>
        <div className='form-group'>
          <legend>Overview</legend>
          <div className='details'>
            <div>
              <h4>Got it!</h4>
            </div>
            <div>
              <p>
                So, you want to train {training_freq}x per week, you're {expStr} and you have {injuryStr}
              </p>
            </div>
            <div>
              <p>If that's all good, let's build your plan!</p>
            </div>
          </div>
        </div>
        <div className='form-controls'>
          <button onClick={() => this.updateFormView(1)} className='button full outline'>
            Edit Answers
          </button>
        </div>
        <div className='form-controls'>
          <button type='submit' className='button full primary-variant'>
            Build My Program
          </button>
        </div>
      </>
    )
  }

  render() {
    const {part} = this.state;
    return (
      <form className='js-new-cycle-form' action='#' onSubmit={this.handleSubmit}>
        <div className='error-msg'>{this.state.error}</div>

        {part === 1 ? this.renderPartOneForm() : <></>}
        {part === 2 ? this.renderPartTwoForm() : <></>}
        {part === 3 ? this.renderPartThreeForm() : <></>}
        {part === 4 ? this.renderPartFourForm() : <></>}

      </form>
    )
  }
}

export default withAppContext(NewCycleForm)