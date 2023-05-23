import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentDto } from './dto/create-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(@Body() paymentDto: PaymentDto) {
    const { status, body } = await this.paymentService.create(paymentDto);
    return { status, body };
  }
}
