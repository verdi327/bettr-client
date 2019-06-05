import React, {Component} from 'react'

const AppContext = React.createContext({
  isLoading: false,
  setLoading: () => {}
});
export default AppContext

export class AppProvider extends Component {
  state = {
    isLoading: false
  }

  setLoading = (bool) => {
    this.setState({isLoading: bool})
  }

  render() {
    return (
      <AppContext.Provider value={{
        ...this.state,
        setLoading: this.setLoading
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const withAppContext = Component => (
  props => (
    <AppContext.Consumer>
      {context => <Component appContext={context} {...props} />}
    </AppContext.Consumer>
  )
)