import { Component } from '@angular/core';
import { scheduled } from 'rxjs';
import { FlightService } from '../_services/flight.service';
import { Flight } from '../_models/flight.model';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css',
  standalone: false
})
export class AddFlightComponent {
  flightForm: any = {
    id: 0,
    airlineName: '',
    fromPlace: '',
    toPlace: '',
    scheduleDate: '',
    departureTime: '',
    arrivalTime: '',
    price: 0,
    totalSeats: 0,
    availableSeats: 0
  };
  flightId = 0;
  isFlightNotAdded = true;
  errorMessage = '';

  constructor(private flightService: FlightService){
    // this.flightForm = {...history.state.flight, };
  }
  onSubmit(): void{
    this.flightService.addFlight(this.flightForm).subscribe({
      next: (fid: any) =>{
        this.flightId = fid;
        this.isFlightNotAdded = false;
      },
      error: (err: {error: string;})=>{
        this.errorMessage = err.error;
        this.isFlightNotAdded = true;
      }
    })
  }
}
