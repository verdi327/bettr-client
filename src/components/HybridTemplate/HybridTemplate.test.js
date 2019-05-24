import React from 'react';
import ReactDOM from 'react-dom';
import HybridTemplate from './HybridTemplate';

describe('HybridTemplate Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< HybridTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
