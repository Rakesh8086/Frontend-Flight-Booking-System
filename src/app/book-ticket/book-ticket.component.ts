import { ChangeDetectorRef, Component } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { Booking } from '../_models/booking.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css',
  standalone: false,
  // imports: [CommonModule]
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
  fieldErrors: any = {};

  constructor(private bookingService: BookingService, 
    private cdr: ChangeDetectorRef
  ) {
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
        this.isTicketBooked = false;
        this.fieldErrors = {};
        if(typeof err.error === 'string') {
          try {
            const parsed = JSON.parse(err.error);
            if(typeof parsed === 'object') {
              this.fieldErrors = parsed;
            }
          } catch {
            // this.serviceError = err.error;
          }
        }
        else if(typeof err.error === 'object') {
          this.fieldErrors = err.error;
        }
        this.cdr.detectChanges();
      }
    });
  }
}