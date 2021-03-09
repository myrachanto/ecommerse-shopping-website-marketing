import axios from 'axios'

export const host = 'http://localhost:4400'

export const http = axios.create({
  baseURL: host,
  timeout: 50000
  // headers: { Authorization: `Bearer ${token}` }
})
