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
import Loader from '../../components/Loader/Loader'
import { withAppContext } from '../../contexts/AppContext'
import './App.css';

class App extends Component {
  static contextType = AuthContext;

  renderAuthError = () => {
    return (
      <div className='auth-error'>
        <span role='img' aria-label='bad news icon' className='emoji'>😞</span>
        <h4>Oh no!</h4>
        <p>
          There was an error trying to fetch your user information.
        </p>
        <p>
          Try logging out and back in to see if the problem resolves itself.
        </p>
      </div>
    )
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  render() {
    return (
      <div className='app'>
          <Loader/>
          <Header/>
          {this.context.hasAuth
            ? <Sidebar pageWrapId={'page-wrap'} outerContainerId={'app'}/>
            : undefined
          }
          
          <div id='page-wrap'>
            <main className='app-main' role='main'>
              {this.context.error ? this.renderAuthError() : undefined}

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

// export default App;
export default withAppContext(App);
