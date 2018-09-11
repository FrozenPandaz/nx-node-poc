import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });
  });

  beforeEach(
    inject(
      [AppService, HttpTestingController],
      (_service: AppService, _controller) => {
        service = _service;
        httpTestingController = _controller;
      }
    )
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should retrieve data', () => {
      const testData = { data: 'data' };
      service.getData().subscribe(data => {
        expect(data).toEqual(testData);
      });
      const request = httpTestingController.expectOne('/data');
      request.flush(testData);
      httpTestingController.verify();
    });
  });
});
