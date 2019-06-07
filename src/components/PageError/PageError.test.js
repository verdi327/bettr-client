import React from 'react';
import ReactDOM from 'react-dom';
import PageError from './PageError';

describe('PageError Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< PageError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
