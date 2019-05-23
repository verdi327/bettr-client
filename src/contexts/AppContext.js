import React from 'react'

const AppContext = React.createContext({
  updateSidebar: () => {},
  currentUser: {}
})

export default AppContext;