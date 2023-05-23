import { Injectable } from '@nestjs/common';
import { PaymentDto } from './dto/create-payment.dto';
import { MercadoPago } from 'mercadopago/interface';
import { ConfigService } from '@nestjs/config';
import { PaymentCreateResponse } from 'mercadopago/resources/payment';

@Injectable()
export class PaymentService {
  constructor(
    private mercadopago: MercadoPago,
    private configService: ConfigService,
  ) {
    this.mercadopago.configurations.setAccessToken(
      this.configService.get<string>('ACCESS_TOKEN_MERCADO_PAGO'),
    );
  }
  async create(paymentDto: PaymentDto): Promise<PaymentCreateResponse> {
    return this.mercadopago.payment.save(paymentDto);
  }
}
