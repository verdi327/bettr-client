import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { BrowserRouter, Link } from 'react-router-dom'

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        < Sidebar>
          <Link to='/login'>login</Link>
        </Sidebar>
      </BrowserRouter>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})
