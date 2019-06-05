import React from 'react';
import ReactDOM from 'react-dom';
import AppError from './AppError';

describe('AppError Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AppError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
