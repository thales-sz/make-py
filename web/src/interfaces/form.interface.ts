export interface IFormSignUp {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
}

export interface IFormSignIn {
  email: string
  password: string
  checkbox: boolean
}
