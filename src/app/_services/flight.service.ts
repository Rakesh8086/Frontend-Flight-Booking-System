import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../_models/flight.model';

const FLIGHT_API = 'https://localhost:8082/flight-service/api/flight/';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) {}

  searchFlights(fromPlace: string, toPlace: string, journeyDate: string): Observable<Flight[]> {
    return this.http.post<Flight[]>(FLIGHT_API + 'search', {
      fromPlace,
      toPlace,
      journeyDate
    });
  }
  addFlight(flight: Flight): Observable<any>{
    return this.http.post<any>(FLIGHT_API + 'airline/inventory/add',
      flight
    );
  }
}