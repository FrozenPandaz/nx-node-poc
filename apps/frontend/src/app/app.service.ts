import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data, DATA_ENDPOINT } from '@nodeproj/schema';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Data>(DATA_ENDPOINT);
  }
}
