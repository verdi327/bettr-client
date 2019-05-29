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
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({error: null})
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

  render() {
    return (
      <form className='js-new-cycle-form' action='#' onSubmit={this.handleSubmit}>
        <div className='error-msg'>{this.state.error}</div>

        <div className='form-group'>
          <fieldset id='training_freq'>
            <legend>How Often Do You Like to Train?</legend>
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

        <div className='form-group'>
          <fieldset id='training_exp'>
            <legend>How new are you to training?</legend>
            <label>
              <input type='radio' name='training_exp' value='beg' onChange={this.handleChange} checked={this.state.training_exp === 'beg'} required/>
              Novice - have trained in a weight room for less than a year
            </label>
            <label>
              <input type='radio' name='training_exp' value='int' onChange={this.handleChange} checked={this.state.training_exp === 'int'} required/>
              Experienced - have trained consistently for 1-3 years
            </label>
            <label>
              <input type='radio' name='training_exp' value='adv' onChange={this.handleChange} checked={this.state.training_exp === 'adv'} required/>
              Very Experienced - have trained consistently for 3+ years
            </label>
          </fieldset>
        </div>

        <div className='form-group'>
          <fieldset id='injuries'>
            <legend>Do you have any injuries that limit what you can do?</legend>
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
          <button type='submit' className='button'>Build My Program</button>
        </div>
      </form>
    )
  }
}
  