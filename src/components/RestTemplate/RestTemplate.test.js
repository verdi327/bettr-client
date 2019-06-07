import React from 'react';
import ReactDOM from 'react-dom';
import RestTemplate from './RestTemplate';

describe('RestTemplate Component', () => {
  it('renders without crashing', () => {
    const workout = {
      id: 1,
      day: 1,
      type: 'rest',
      completed: true,
      warm_up: 'a warm up',
      focus: 'a focus'
    }
    const div = document.createElement('div');
    ReactDOM.render(< RestTemplate workout={workout} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
