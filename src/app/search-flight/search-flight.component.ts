import { Component } from '@angular/core';
import { FlightService } from '../_services/flight.service';
import { Flight } from '../_models/flight.model';
import { BookingService } from '../_services/booking.service';
import { Router } from '@angular/router';
import { Booking } from '../_models/booking.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
  standalone: false,
  // imports: [CommonModule]
})
export class SearchFlightComponent {

  form: any = {
    fromPlace: null,
    toPlace: null,
    journeyDate: null
  };

  flights: Flight[] = [];
  isSearchFailed = false;
  errorMessage = '';

  constructor(private flightService: FlightService,
    private bookingService: BookingService,
    private router: Router
  ) {

  }
  onSubmit(): void {
    const fromPlace = this.form.fromPlace;
    const toPlace = this.form.toPlace;
    const journeyDate = this.form.journeyDate;
    this.flightService.searchFlights(fromPlace, toPlace, journeyDate).subscribe({
      next: data => {
        this.flights = data;
        this.isSearchFailed = false;
      },
      error: err => {
        this.errorMessage = err.error?.message || 'No flights found';
        this.isSearchFailed = true;
        this.flights = [];
      }
    });
  }
  bookTicket(flight: any){
    const bookingData: Booking = {
      flightId: flight.id,
      userName: '',
      userEmail: '',
      journeyDate: flight.scheduleDate,
      mobileNumber: '',
      mealOpted: '',
      passengers: []
    };
    this.router.navigate(['/book-ticket'], {
      state: { booking: bookingData }
    });
  }
}
