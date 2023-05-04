import axios, { type AxiosInstance } from 'axios'
import type { IFormSignUp, IUser } from '../interfaces/form.interface'

export default class ApiUserQueries {
  private readonly api: AxiosInstance
  private readonly config

  constructor (baseUrl: string, token: string) {
    this.api = axios.create({
      baseURL: baseUrl
    })
    this.config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }

  async getUser (): Promise<IUser[]> {
    return await this.api.get('users', this.config)
  }

  async createUser (body: IFormSignUp): Promise<IUser> {
    return await this.api.post('signup', body)
  }
}
