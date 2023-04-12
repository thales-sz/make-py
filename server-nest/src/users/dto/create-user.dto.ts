export class CreateUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
  sale: Sale;
  phoneNumber: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface Sale {
  id: string;
  userId: string;
  deliveryAddress: DeliveryAddress;
  totalPrice: number;
  saleDate: Date;
  status: DeliveryStatus;
}

enum DeliveryStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}

export interface DeliveryAddress {
  saleId: string;
  address: string;
  cep: string;
}
