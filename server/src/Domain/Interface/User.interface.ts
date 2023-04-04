export interface IUserSignIn {
  email: string
  password: string
}

export interface IUser {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  role: Role
  sale: ISale[]
  delivery_address: IAddress[]
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface ISale {
  id: string
  delivery_address: IAddress
  user_id: string
  total_price: number
  sale_date: Date
  status: boolean
}

export interface IAddress {
  id: string
  user_id: string
  delivery_address: string
  cep: string
}

export interface IUserReturn {
  token: string
  result: string
}
