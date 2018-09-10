import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();
    controller = app.get<AppController>(AppController);
  });

  describe('data', () => {
    test('should return data', () => {
      expect(controller.data()).toMatchSnapshot();
    });
  });
});
