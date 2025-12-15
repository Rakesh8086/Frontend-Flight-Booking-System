import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app';

import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { BoardAdmin } from './components/board-admin/board-admin';
import { BoardModerator } from './components/board-moderator/board-moderator';
import { BoardUser } from './components/board-user/board-user';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Home,
    Profile,
    BoardAdmin,
    BoardModerator,
    BoardUser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [authInterceptorProviders], 
  bootstrap: [App]
})
export class AppModule { 
    
}