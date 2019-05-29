import React, {Component} from 'react'
import TokenService from '../services/TokenService'

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

  componentDidMount() {
    // if TokenService.hasAuthToken()
      // make call to /api/users/:user_id and set currentUser
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