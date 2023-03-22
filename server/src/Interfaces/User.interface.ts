export default interface User {
  id?: string
  first_name: string
  last_name: string
  email: string
  role: Role 
  password: string
}

enum Role {
  USER,
  ADMIN,
  SELLER
}
