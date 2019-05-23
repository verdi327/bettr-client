import React, {Component} from 'react';
import './NewCycleForm.css';
  
export default class NewCycleForm extends Component {

  state = {
    error: null,
    sex: '',
    training_freq: '',
    training_exp: '',
    injuries: [],
  }
  
  validateForm = () => {
    const {sex, training_freq, training_exp} = this.state
    if (!sex || !training_freq || !training_exp) {
      this.setState({
        formValid: false,
        error: 'Sex, Training Frequency and Training Experience are all required fields'
      })
    }
    return true
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({error: null})
    const valid = this.validateForm()
    if (!valid) {
      return
    }
    console.log('new cycle form submitted')
    this.props.onCycleSuccess()
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  handleInjuryChange = (e) => {
    const value = e.target.value
    let injuries = [...this.state.injuries]

    if (injuries.includes(value)) {
      injuries = injuries.filter(injury => injury !== value)
    } else {
      injuries.push(value)
    }

    this.setState({injuries})
  }

  render() {
    return (
      <form className='js-new-cycle-form' action='#' onSubmit={this.handleSubmit}>
        <div className='error-msg'>{this.state.error}</div>

        <div className='form-group'>
          <fieldset id='sex' onChange={this.handleChange}>
            <legend>Sex</legend>
            <label>
              <input type='radio' name='sex' value='male'/>
              Male
            </label>
            <label>
              <input type='radio' name='sex' value='female'/>
              Female
            </label>
          </fieldset>
        </div>

        <div className='form-group'>
          <fieldset id='training_freq' onChange={this.handleChange}>
            <legend>How Often Do You Like to Train?</legend>
            <label>
              <input type='radio' name='training_freq' value='3'/>
              3 x per week
            </label>
            <label>
              <input type='radio' name='training_freq' value='4'/>
              4 x per week
            </label>
            <label>
              <input type='radio' name='training_freq' value='5'/>
              5 x per week
            </label>
          </fieldset>
        </div>

        <div className='form-group'>
          <fieldset id='training_exp' onChange={this.handleChange}>
            <legend>How new are you to training?</legend>
            <label>
              <input type='radio' name='training_exp' value='beg'/>
              Novice - have trained in a weight room for less than a year
            </label>
            <label>
              <input type='radio' name='training_exp' value='int'/>
              Experienced - have trained consistently for 1-3 years
            </label>
            <label>
              <input type='radio' name='training_exp' value='adv'/>
              Very Experienced - have trained consistently for 3+ years
            </label>
          </fieldset>
        </div>

        <div className='form-group'>
          <fieldset id='injuries' onChange={this.handleInjuryChange}>
            <legend>Do you have any injuries that limit what you can do?</legend>
            <label>
              <input type='checkbox' name='injuries' value='shoulder'/>
              Shoulders - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='knee'/>
              Knees - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='hip'/>
              Hips - left, right or both
            </label>
            <label>
              <input type='checkbox' name='injuries' value='lower_back'/>
              Lower Back
            </label>
            <label>
              <input type='checkbox' name='injuries' value='upper_back'/>
              Upper Back
            </label>
            <label>
              <input type='checkbox' name='injuries' value=''/>
              None that I can't work through!
            </label>
          </fieldset>
        </div>

        <div className='form-controls'>
          <button type='submit' className='button'>Build My Program</button>
        </div>
      </form>
    )
  }
}
  