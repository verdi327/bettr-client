import React from 'react';
import ReactDOM from 'react-dom';
import NewCycleForm from './NewCycleForm';

describe('NewCycleForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< NewCycleForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
