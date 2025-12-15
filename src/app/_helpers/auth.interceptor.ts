import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) { 

    } 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const user = this.storageService.getUser();
        // console.log("Interceptor Debug - A: User Object Retrieved:", user); 
        if(user != null && user.token) { 
            console.log("Interceptor Debug - B: Token FOUND! Attaching header..."); 
            authReq = req.clone({ 
                headers: req.headers.set('Authorization', 'Bearer ' + user.token) 
            });
            
        } 
        else {
            // console.log("Interceptor Debug - B: Token NOT FOUND."); 
        }
        return next.handle(authReq);
    }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];