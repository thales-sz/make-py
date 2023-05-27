import { PartialType } from '@nestjs/mapped-types';
import { PaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(PaymentDto) {}
