import React, {Component} from 'react'
import TokenService from '../services/TokenService'
import AuthApiService from '../services/auth-api-service'

const AuthContext = React.createContext({
  logout: () => {},
  login: () => {},
  setCurrentUser: () => {},
  hasAuth: false,
  currentUser: null
});
export default AuthContext

export class AuthProvider extends Component {
  state = {
    hasAuth: TokenService.hasAuthToken(),
    currentUser: null
  }

  async componentDidMount() {
   this.getCurrentUser()
  }

  async getCurrentUser() {
    if (TokenService.hasAuthToken()) {
      const user = await AuthApiService.getCurrentUser()
      this.setState({currentUser: user})
    }
  }
  
  login = (token) => {
    TokenService.saveAuthToken(token)
    this.setState({hasAuth: true})
  }

  logout = () => {
    TokenService.clearAuthToken()
    this.setState({hasAuth: false})
  }

  setCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        login: this.login,
        logout: this.logout,
        setCurrentUser: this.setCurrentUser,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const withAuthContext = Component => (
  props => (
    <AuthContext.Consumer>
      {context => <Component authContext={context} {...props} />}
    </AuthContext.Consumer>
  )
)