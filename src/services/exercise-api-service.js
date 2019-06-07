import config from '../config';
import TokenService from './TokenService';

const ExerciseApiService = {
  async fetchDemoVideo(title) {
    const encodedTitle = encodeURI(title)
    const res = await fetch(`${config.API_ENDPOINT}/exercises/${encodedTitle}`, {
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
 }

export default ExerciseApiService;