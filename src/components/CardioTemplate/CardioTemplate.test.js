import React from 'react';
import ReactDOM from 'react-dom';
import CardioTemplate from './CardioTemplate';

describe('CardioTemplate Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CardioTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
