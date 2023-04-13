export class SaleEntity {
  id: string;
  userId: string;
  totalPrice: number;
  saleDate: Date;
  status: DeliveryStatus;
  deliveryAddress: DeliveryAddress;
}

enum DeliveryStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}

interface DeliveryAddress {
  saleId: string;
  address: string;
  cep: number;
}
