import { Component } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { BookingResponse } from '../_models/booking.respone.model';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.css'
})
export class ViewTicketComponent {
  form : BookingResponse = {
    pnr: '',
    flightId: 0,
    userName: '',
    userEmail: '',
    mobileNumber: '',
    bookingDate: '',
    numberOfSeats: 0,
    mealOpted: '',
    totalCost: 0,
    journeyDate: '',
    passengers: [],
  };
  bookingResponse: BookingResponse | null = null ;
  errorMessage = '';
  isTicketFetchedFailed = true;

  constructor(private bookingService: BookingService) {
    this.form = {...history.state.bookingResponse};
  }

  onSubmit(): void{
    const pnr = this.form.pnr;
    this.bookingService.viewTicket(pnr).subscribe({
      next: (respone:BookingResponse)=>{
        this.bookingResponse = respone;
        // this.form = respone;
        this.isTicketFetchedFailed = false;
      },
      error: err=>{
        this.errorMessage = err.error?.message || 'No Booking found';
        this.isTicketFetchedFailed = true;
      }
    })
  }
}
