import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentDto } from './dto/create-payment.dto';
import { Public } from 'src/common/metadata';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Public()
  @Post()
  async create(@Body() paymentDto: PaymentDto) {
    const { status, body } = await this.paymentService.create(paymentDto);
    return { status: body.status, body, transaction_status: status };
  }
}
