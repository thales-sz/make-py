import { Controller, Get } from '@nestjs/common';
import { Public } from './common/metadata';

@Controller('health')
export class HealthCheckController {
  @Public()
  @Get()
  health() {
    return `This server is healthy`;
  }
}
