import axios from "axios";

const API_URL = 'http://localhost:3334'

export default {
  login(user) {
    return axios.post(`${API_URL}/auth/login`, user)
  },
  checkToken(token) {
    return axios.get(`${API_URL}/auth/check-token`, { headers: { 'Authorization': `Bearer ${token}` } });
  },
  register(user) {
    return axios.post(`${API_URL}/auth/register`, user)
  }
}
