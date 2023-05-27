import { Injectable } from '@nestjs/common';
import { PaymentDto } from './dto/create-payment.dto';
import * as mercadopago from 'mercadopago';
import { PaymentCreateResponse } from 'mercadopago/resources/payment';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentService {
  constructor(private configService: ConfigService) {
    mercadopago.configure({
      access_token: this.configService.get<string>('ACCESS_TOKEN_MERCADO_PAGO'),
    });
  }
  async create(paymentDto: PaymentDto): Promise<PaymentCreateResponse> {
    return mercadopago.payment.save(paymentDto);
  }
}
