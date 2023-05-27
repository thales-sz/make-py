import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import {
  CreatePaymentPayload,
  PaymentPayer,
} from 'mercadopago/models/payment/create-payload.model';

export class PaymentDto implements CreatePaymentPayload {
  @IsNotEmpty()
  @IsObject()
  payer: PaymentPayer;

  @IsNotEmpty()
  @IsNumber()
  transaction_amount: number;

  @IsNotEmpty()
  @IsString()
  payment_method_id: string;

  @IsNotEmpty()
  @IsNumber()
  installments: number;

  token?: string | undefined;
}
