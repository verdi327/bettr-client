import config from '../config';

const AuthApiService = {
  async login(email, password){
    const loginData = {email, password};
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },

  async createUser(userData){
    const res = await fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  }
}

export default AuthApiService;