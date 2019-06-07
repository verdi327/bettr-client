import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>      
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
