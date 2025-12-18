import { Component } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { Booking } from '../_models/booking.model';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {
  form: Booking = {
    flightId: 0,
    userName: '',
    userEmail: '',
    journeyDate: '',
    mobileNumber: '',
    mealOpted: '',
    passengers: [{
        name: 'AAA',
        gender: 'MALE',
        age: 25,
        seatNumber: '1'
      }]
  };
  bookingPnr = null;
  isTicketBooked = false;
  errorMessage = '';

  constructor(private bookingService: BookingService) {
  this.form = {...history.state.booking, 
      passengers: this.form.passengers
    };
  }
  onSubmit(): void {
    const flightId = this.form.flightId;
    this.bookingService.bookTicket(flightId, this.form).subscribe({
      next: pnr => {
        this.bookingPnr = pnr;
        this.isTicketBooked = true;
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Booking done';
        this.isTicketBooked = false;
      }
    });
  }
}