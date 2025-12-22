import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AuthGuard } from './_guards/auth.guard';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { ViewBookingHistoryComponent } from './view-booking-history/view-booking-history.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {
    path: 'search-flights',
    component: SearchFlightComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'book-ticket',
    component: BookTicketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-ticket',
    component: ViewTicketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cancel-ticket',
    component: CancelTicketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-booking-history',
    component: ViewBookingHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-flight',
    component: AddFlightComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }