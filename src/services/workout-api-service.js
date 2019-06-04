import config from '../config';
import TokenService from './TokenService';

const WorkoutApiService = {
  async list() {
    const res = await fetch(`${config.API_ENDPOINT}/workouts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },

  async show(id) {
    const res = await fetch(`${config.API_ENDPOINT}/workouts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },

  async createCycle(newCycle) {
    const res = await fetch(`${config.API_ENDPOINT}/cycles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newCycle)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  }
 }

export default WorkoutApiService;