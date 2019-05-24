import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutListItem from './WorkoutListItem';

describe('WorkoutListItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< WorkoutListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
