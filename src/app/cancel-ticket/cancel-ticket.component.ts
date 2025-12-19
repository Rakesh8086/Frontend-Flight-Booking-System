import { Component } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrl: './cancel-ticket.component.css'
})
export class CancelTicketComponent {
  pnrField: any = {
    pnr : ''
  }
  errorMessage = '';
  isTicketNotCancelled = true;
  response = 'Ticket Cancelled'

  constructor(private bookingService: BookingService,
    private http: HttpClient
  ) {
    
  }
  onSubmit(): void{
    const cancelPnr = this.pnrField.pnr;
    this.bookingService.cancelTicket(cancelPnr).subscribe({
      next: (response:any)=>{
        this.isTicketNotCancelled = false;
        this.errorMessage = response; 
      },
      error: err=>{
        this.errorMessage = err.error;
        this.isTicketNotCancelled = true;
      }
    })
  }
}
