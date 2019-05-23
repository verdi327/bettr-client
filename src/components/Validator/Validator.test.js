import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './Validator';

describe('Validator Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Validator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
