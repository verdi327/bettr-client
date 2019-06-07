import React from 'react';
import ReactDOM from 'react-dom';
import WeightsTemplate from './WeightsTemplate';

describe('WeightsTemplate Component', () => {
  it('renders without crashing', () => {
    const workout = {
      id: 1,
      day: 1,
      type: 'weights',
      sub_type: 'power',
      completed: false,
      warm_up: 'a warm up',
      main: ['Reverse Med Ball Throws'],
      main_sets: '7-10',
      main_rest: 'as needed',
      main_reps: '2-3',
      acc: ['Goblet Squat', 'Dumbbell Bench Press', 'Double KB Snatch'],
      acc_sets: '3-4',
      acc_reps: '10-15',
      acc_rest: '1-2 minutes'
    }
    const div = document.createElement('div');
    ReactDOM.render(< WeightsTemplate workout={workout} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
