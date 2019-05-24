import React from 'react';
import ReactDOM from 'react-dom';
import WeightsTemplate from './WeightsTemplate';

describe('WeightsTemplate Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< WeightsTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
