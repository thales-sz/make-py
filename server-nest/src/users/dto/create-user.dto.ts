export class CreateUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  sale: Sale;
  phoneNumber: string;
  address: Address;
}
