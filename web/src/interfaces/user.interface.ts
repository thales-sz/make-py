export interface IUser {
  _id: string

  firstName: string

  lastName: string

  email: string

  password: string

  phoneNumber: string

  role?: 'ADMIN' | 'USER'
}
