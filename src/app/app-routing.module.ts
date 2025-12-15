import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Profile } from './components/profile/profile';
import { BoardAdmin } from './components/board-admin/board-admin';
import { SearchFlightComponent } from './components/search-flight/search-flight';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile }, 
  { path: 'add-flight', component: BoardAdmin }, 
  { path: 'search', component: SearchFlightComponent }, 
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];
