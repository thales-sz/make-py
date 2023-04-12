export interface IUser {
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
  status: boolean;
}

export interface DeliveryAddress {
  saleId: string;
  address: string;
  cep: string;
}
