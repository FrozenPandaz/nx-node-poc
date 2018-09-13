import { Get, Controller } from '@nestjs/common';
import { DATA_ENDPOINT, Data } from '@nodeproj/schema';

@Controller('/api')
export class AppController {
  constructor() {}

  @Get(DATA_ENDPOINT)
  data(): Data {
    console.log('data2');
    return {
      data: 'data'
    };
  }
}
