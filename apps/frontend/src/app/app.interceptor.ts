import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, handler: HttpHandler) {
    return handler.handle(
      request.clone({
        url: '/api' + request.url
      })
    );
  }
}
