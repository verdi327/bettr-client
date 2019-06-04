import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import PrivateRoute from '../Utils/PrivateRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NewCyclePage from '../../routes/NewCyclePage/NewCyclePage'
import CompletedCyclePage from '../../routes/CompletedCyclePage/CompletedCyclePage'
import WorkoutsPage from '../../routes/WorkoutsPage/WorkoutsPage'
import WorkoutPage from '../../routes/WorkoutPage/WorkoutPage'
import ProfilePage from '../../routes/ProfilePage/ProfilePage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import AuthContext from '../../contexts/AuthContext'
import './App.css';

export default class App extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div className='app'>
          <Header/>
          {this.context.hasAuth
            ? <Sidebar pageWrapId={'page-wrap'} outerContainerId={'app'}/>
            : undefined
          }
          
          <div id='page-wrap'>
            <main className='app-main' role='main'>
              <Switch>
                <PublicOnlyRoute exact path={'/'} component={LandingPage}/>
                <PublicOnlyRoute path={'/login'} component={LoginPage}/>
                <PublicOnlyRoute path={'/register'} component={RegistrationPage}/>
                <PrivateRoute path={'/new-cycle'} component={NewCyclePage}/>
                <PrivateRoute path={'/completed-cycle'} component={CompletedCyclePage}/>
                <PrivateRoute exact path={'/workouts'} component={WorkoutsPage}/>
                <PrivateRoute exact path={'/workouts/:workout_id'} component={WorkoutPage}/>
                <PrivateRoute path={'/profile'} component={ProfilePage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </main>
          </div>
      </div>
    );
  }
}
