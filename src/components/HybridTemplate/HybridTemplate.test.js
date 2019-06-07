import React from 'react';
import ReactDOM from 'react-dom';
import HybridTemplate from './HybridTemplate';

describe('HybridTemplate Component', () => {
  it('renders without crashing', () => {
    const workout = {
      id: 1,
      day: 1,
      type: 'hybrid',
      sub_type: 'intensity',
      completed: false,
      warm_up: 'a warm up',
      main: ['a hybrid workout\\nwith line\\nbreaks']
    }
    const div = document.createElement('div');
    ReactDOM.render(< HybridTemplate workout={workout}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
