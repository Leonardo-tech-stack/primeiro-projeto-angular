import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // interceptor intercepta valores...

  constructor(
  private authService: AuthService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Passou pelo interceptor', request);

    const authToken = this.authService.getToken();

    if (authToken) {
      request = request.clone({

        // outra forma
        // headers: request.headers.set('Authorization', this.authService.getToken()),
  
        setHeaders: {
          Authorization: authToken,
        }
      });
    }

    return next.handle(request);
  }
}
