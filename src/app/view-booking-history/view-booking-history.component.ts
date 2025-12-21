import { Component } from '@angular/core';
import { BookingResponse } from '../_models/booking.respone.model';
import { BookingService } from '../_services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-booking-history',
  templateUrl: './view-booking-history.component.html',
  styleUrl: './view-booking-history.component.css',
  standalone: false,
  // imports: [CommonModule]
})
export class ViewBookingHistoryComponent {
  emailField: any = {
    email: ''
  };
  errorMessage = '';
  isHistoryNotFetched = true;
  bookingHistory: BookingResponse[] = [];
  
  constructor(private bookingService: BookingService){

  }
  onSubmit(): void{
    const emailId = this.emailField.email;
    this.bookingService.viewHistory(emailId).subscribe({
      next: (response:any)=>{
        this.bookingHistory = response;
        this.isHistoryNotFetched = false;
      },
      error: err=>{
        this.errorMessage = err.error;
        this.isHistoryNotFetched = true;
      }
    })
  }
}
