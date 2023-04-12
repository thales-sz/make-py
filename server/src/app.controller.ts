import { Controller, Get } from '@nestjs/common';
import { Public } from './common/public';

@Controller('health')
export class HealthCheckController {
  @Public()
  @Get()
  health() {
    return `This server is healthy`;
  }
}
