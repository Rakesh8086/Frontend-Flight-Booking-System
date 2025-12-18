import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../_models/booking.model';
import { Router } from '@angular/router';

const BOOKING_API = 'https://localhost:8082/booking-service/api/booking/';

@Injectable({
  providedIn: 'root'
})
export class BookingService{
    constructor(private http: HttpClient,
        private router: Router
    ){
    }
    bookTicket(flightId:number, bookingData:Booking): Observable<any>{
        return this.http.post<any>(`${BOOKING_API}ticket/${bookingData.flightId}`, 
              bookingData
            );
    }
}