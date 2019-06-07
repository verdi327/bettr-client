import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter, Link } from 'react-router-dom'

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Header>
          <Link to='/login'>login</Link>
        </Header>
      </BrowserRouter>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
})
