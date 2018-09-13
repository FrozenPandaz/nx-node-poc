import { dataController, getData } from './data.controller';
import { Application } from 'express';
import * as express from 'express';

describe('dataController', () => {
  let app: Application;

  beforeEach(() => {
    app = express();
  });

  it('should register the route', () => {
    const get = spyOn(app, 'get');
    dataController(app);
    expect(get.calls.first().args[0]).toEqual('/api/data');
  });

  describe('getData', () => {
    it('should return data', () => {
      expect(getData(<any>{})).toEqual({
        data: 'express data'
      });
    });
  });
});
