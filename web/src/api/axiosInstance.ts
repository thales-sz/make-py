import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://make-py-server.onrender.com',
  headers: { 'Content-Type': 'application/json' }
})

export const local = axios.create({
  baseURL: 'https://make-py-server.onrender.com',
  headers: { 'Content-Type': 'application/json' }
})
