import axios from 'axios'
import {
  QueryClient
} from 'react-query'

export const queryClient = new QueryClient()

export const api = axios.create({
  url: 'https://make-py-server.onrender.com',
  headers: { 'Content-Type': 'application/json' }
})
