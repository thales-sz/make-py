import axios, { type AxiosResponse, type AxiosInstance, type AxiosRequestConfig } from 'axios'
import type { IFormSignUp, IUser } from '../interfaces/form.interface'

export default class ApiUserQueries {
  private readonly api: AxiosInstance
  private readonly config: AxiosRequestConfig
  private token: string = ''

  constructor (baseUrl: string) {
    this.api = axios.create({
      baseURL: baseUrl
    })
    this.config = {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    }
  }

  async setToken (token: string): Promise<void> {
    this.token = token
  }

  async getUser (): Promise<IUser[]> {
    return await this.api.get('users', this.config)
  }

  async createUser (userCredentials: IFormSignUp): Promise<IUser> {
    return await this.api.post('users/signup', userCredentials)
  }

  async singIn (userCredentials: IFormSignUp): Promise<AxiosResponse> {
    return await this.api.post('auth/signin', { email: userCredentials.email, password: userCredentials.password })
  }
}
