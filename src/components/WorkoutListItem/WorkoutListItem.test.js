import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutListItem from './WorkoutListItem';
import { BrowserRouter } from 'react-router-dom'

describe('WorkoutListItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const workout = {id: 1, type: 'rest', completed: true}
    ReactDOM.render(
      <BrowserRouter>
        < WorkoutListItem active={false} workout={workout} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})
