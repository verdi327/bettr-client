import React, { Component } from 'react'
import './CompletedCyclePage.css';

export default class CompletedCyclePage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  redirectToNewCycle = () => {
    const {history } = this.props
    history.push('/new-cycle');
  }
  
  render() {
    return (
      <section className='CompletedCyclePage content'>
        <h2>Cycle Complete!</h2>
        <p>Kudos on making it through a full cycle. Make sure to take an appropriate rest week before jumping into your next cycle.</p>
        <button onClick={this.redirectToNewCycle} className='button full'>Start New Cycle</button>
      </section>
    )
  }
}