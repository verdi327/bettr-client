import React from 'react';
import ReactDOM from 'react-dom';
import CardioTemplate from './CardioTemplate';

describe('CardioTemplate Component', () => {
  it('renders without crashing', () => {
    const workout = {
      id: 1,
      day: 1,
      type: 'cardio',
      sub_type: 'power',
      completed: false,
      warm_up: 'a warm up',
      main: ['a cardio workout']
    }
    const div = document.createElement('div');
    ReactDOM.render(< CardioTemplate workout={workout} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
