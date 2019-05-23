import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import PrivateRoute from '../Utils/PrivateRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NewCyclePage from '../../routes/NewCyclePage/NewCyclePage'
import WorkoutsPage from '../../routes/WorkoutsPage/WorkoutsPage'
import WorkoutPage from '../../routes/WorkoutPage/WorkoutPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import TokenService from '../../services/TokenService'
import AppContext from '../../contexts/AppContext'
import './App.css';

export default class App extends Component {
  state = {
    hasAuth: TokenService.hasAuthToken()
  }

  updateSidebar = () => {
    this.setState({hasAuth: TokenService.hasAuthToken()})
  }

  render() {
    return (
      <div className='app'>
        <AppContext.Provider value={{updateSidebar: this.updateSidebar}}>
          <Header/>
          {this.state.hasAuth
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
                <PrivateRoute exact path={'/workouts'} component={WorkoutsPage}/>
                <PrivateRoute exact path={'/workouts/:day'} component={WorkoutPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </main>
          </div>
        </AppContext.Provider>
      </div>
    );
  }
}
