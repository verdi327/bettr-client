import config from '../config';
import TokenService from './TokenService';

const WorkoutApiService = {
  async list(week=null) {
    let workoutsUrl = `${config.API_ENDPOINT}/workouts`
    if (week) {
      workoutsUrl += `?week=${week}`
    }
    const res = await fetch(workoutsUrl, {
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

  async update(id, body) {
    const res = await fetch(`${config.API_ENDPOINT}/workouts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res;
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
  },

  async markCycleComplete(cycle_id) {
    const res = await fetch(`${config.API_ENDPOINT}/cycles/${cycle_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res;
  },


 }

export default WorkoutApiService;