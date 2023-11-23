import { Controller } from '@nestjs/common';
import { AdvertService } from './advert.service';

@Controller('advert')
export class AdvertController {
  constructor(private readonly advertService: AdvertService) {}
}
