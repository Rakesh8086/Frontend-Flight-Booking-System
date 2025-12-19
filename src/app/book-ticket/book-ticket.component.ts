import { Component } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { Booking } from '../_models/booking.model';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {
  passengerCount = 1;
  form: Booking = {
    flightId: 0,
    userName: '',
    userEmail: '',
    journeyDate: '',
    mobileNumber: '',
    mealOpted: '',
    passengers: []
  };
  bookingPnr = null;
  isTicketBooked = false;
  errorMessage = '';

  constructor(private bookingService: BookingService) {
  this.form = {...history.state.booking, 
      passengers: this.form.passengers
    };
    this.addPassengers();
  }
  addPassengers(): void {
    this.form.passengers = [];
    for(let i=0;i<this.passengerCount;i++){
      this.form.passengers.push({name: '', gender: '', age: 0, seatNumber:''});
    }
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