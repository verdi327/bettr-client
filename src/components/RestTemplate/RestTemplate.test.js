import React from 'react';
import ReactDOM from 'react-dom';
import RestTemplate from './RestTemplate';

describe('RestTemplate Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< RestTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
