import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchRequest } from '../_models/search-request';

const API_URL = 'http://localhost:8080/api/flight/'; 

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) { 

  }
  searchFlightsEndpoint(requestBody: SearchRequest): Observable<any> {
    return this.http.post(
      API_URL + 'search', 
      requestBody, 
      { responseType: 'text' }
    );
  }
}