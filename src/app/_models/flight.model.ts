export interface Flight {
  // addFlight(flightForm: Flight): unknown;
  id: number;
  airlineName: string;
  fromPlace: string;
  toPlace: string;
  scheduleDate: string;    
  departureTime: string; 
  arrivalTime: string;     
  price: number;
  totalSeats: number;
  availableSeats: number;
}