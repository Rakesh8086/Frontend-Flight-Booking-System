import { Passenger } from "./passenger.model";

export interface BookingResponse {
  pnr:string;
  flightId: number;
  userName: string;
  userEmail: string;
  journeyDate: string;
  bookingDate: string;
  numberOfSeats: number;
  totalCost: number;
  mobileNumber: string;    
  mealOpted: string; 
  passengers: Passenger[]
}