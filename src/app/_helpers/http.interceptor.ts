import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {

  } 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401) {
          console.warn("JWT Expired or Unauthorized.");
          sessionStorage.removeItem('auth-user'); 
          this.router.navigate(['/login']);
        }
        
        return throwError(() => error);
      })
    );
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];