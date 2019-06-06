let apiPath;
let tokenKey;
if (process.env.NODE_ENV === 'production') {
  apiPath = 'https://bettr-fit-api.herokuapp.com/api'
  tokenKey = 'bettr-prod-auth-token'
} else {
  apiPath = 'http://localhost:8000/api'
  tokenKey = 'bettr-dev-auth-token'
}

export default {
  API_ENDPOINT: apiPath,
  TOKEN_KEY: tokenKey,
}