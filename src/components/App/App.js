import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NewCyclePage from '../../routes/NewCyclePage/NewCyclePage'
import WorkoutsPage from '../../routes/WorkoutsPage/WorkoutsPage'
import WorkoutPage from '../../routes/WorkoutPage/WorkoutPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './App.css';

export default class App extends Component {
  state = {
    auth: true
  }

  renderLoggedInView = () => {
    return (
      <div className='app'>
        <Header/>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'app'}/>
        
        <div id='page-wrap'>
          <main className='app-main' role='main'>
            <Switch>
              <Route exact path={'/'} component={WorkoutsPage}/>
              <Route path={'/login'} component={LoginPage}/>
              <Route path={'/register'} component={RegistrationPage}/>
              <Route path={'/new-cycle'} component={NewCyclePage}/>
              <Route exact path={'/workouts'} component={WorkoutsPage}/>
              <Route exact path={'/workouts/:day'} component={WorkoutPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }


  render() {
    if (this.state.auth) {
      return this.renderLoggedInView()
    } else {
      return < LandingPage />
    }
  }
}
