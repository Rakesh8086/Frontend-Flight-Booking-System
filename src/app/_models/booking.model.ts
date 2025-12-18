import { Passenger } from "./passenger.model";

export interface Booking {
  flightId: number;
  userName: string;
  userEmail: string;
  journeyDate: string;
  mobileNumber: string;    
  mealOpted: string; 
  passengers: Passenger[]
}