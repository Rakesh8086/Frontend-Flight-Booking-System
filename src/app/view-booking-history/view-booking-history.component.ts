import { Component, OnInit } from '@angular/core';
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
export class ViewBookingHistoryComponent implements OnInit { 
  errorMessage = '';
  isHistoryNotFetched = true;
  bookingHistory: BookingResponse[] = [];
  
  constructor(private bookingService: BookingService) {

  }
  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit(): void {
    this.bookingService.viewHistory().subscribe({
      next: (response: any) => {
        // console.log(response);
        this.bookingHistory = response;
        this.isHistoryNotFetched = false;
        this.errorMessage = ''; 
      },
      error: err => {
        // console.error(err);
        if(typeof err.error === 'string'){
          this.errorMessage = err.error
        }
        else{
          this.errorMessage = 'Failed to load history'
        }
        this.isHistoryNotFetched = true;
      }
    });
  }
}
