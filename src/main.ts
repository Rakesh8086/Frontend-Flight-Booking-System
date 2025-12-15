import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { authInterceptorProviders } from './app/_helpers/auth.interceptor';
import { routes } from './app/app-routing.module'; // Import the routes array

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),     
    provideHttpClient(),
    ...authInterceptorProviders
  ]
}).catch(err => console.error(err));
