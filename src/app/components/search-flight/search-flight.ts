import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchRequest } from '../../_models/search-request';
import { FlightService } from '../../_services/flight.service';

const API_URL = 'http://localhost:8080/api/flight/'; 

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './search-flight.html',
  styleUrls: ['./search-flight.css']
})
export class SearchFlightComponent implements OnInit {
  
  searchData: SearchRequest = { 
    fromPlace: '',
    toPlace: '',
    journeyDate: ''
  };
  
  statusMessage: string = 'Enter input';
  content: any = null; 

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    
  }
  
  searchFlights(): void {
    this.statusMessage = 'Searching Flight';
    this.content = null;
    
    this.flightService.searchFlightsEndpoint(this.searchData).subscribe({
      next: data => {
        this.statusMessage = 'Flights available.';
        try {
            this.content = JSON.parse(data);
        } catch (e) {
            this.content = data;
        }
      },
      error: err => {
        let errorMessage = 'Error during flight search.';
        this.statusMessage = errorMessage;
        this.content = err.error || err;
        console.error("Flight API Error:", err);
      }
    });
  }
}