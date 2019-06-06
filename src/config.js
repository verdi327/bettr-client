// let apiPath;
// if (process.env.NODE_ENV === 'production') {
//   apiPath = 'https://bettr-fit-api.herokuapp.com/api'
// } else {
//   apiPath = 'http://localhost:8000/api'
// }

export default {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api',
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'bettr-client-auth-token',
}