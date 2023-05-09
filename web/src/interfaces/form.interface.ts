export interface IFormSignUp {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}

export interface IFormSignIn {
  email: string
  password: string
  remember: boolean
}

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}
