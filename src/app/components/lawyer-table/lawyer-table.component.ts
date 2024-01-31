import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lawyer-table',
  templateUrl: './lawyer-table.component.html',
  styleUrls: ['./lawyer-table.component.scss'],
})
export class LawyerTableComponent implements OnInit {
  lawyers: any;
  @Input() description: any;
  @Input() problemType: any;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  appointment = {
    lawyerEmail: '',
    clientEmail: '',
    type: '',
    description: '',
    status: 'demande',
  };

  hasBooked = false;

  ngOnInit(): void {
    this.loadLawyers();
  }

  token: string | null = '';

  loadLawyers() {
    const jwt = localStorage.getItem('token');
    if (!jwt) {
      throw new Error('No token found in localStorage');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    this.http
      .get('http://localhost:3000/lawyer', { headers })
      .subscribe((result) => {
        this.lawyers = result;
        console.log(this.lawyers);
      });
  }

  saveLawyer(lawyer: any) {
    this.hasBooked = true;
    const jwt = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    this.http
      .get('http://localhost:3000/client/clientInfo/', { headers })
      .subscribe((result: any) => {
        this.appointment.clientEmail = result.email;
        this.appointment.lawyerEmail = lawyer.email;
        this.appointment.type = this.problemType;
        this.appointment.description = this.description;
        console.log(this.appointment);
        this.http
          .post('http://localhost:3000/appointment/book/', this.appointment)
          .subscribe((result: any) => {});
        this.toastr.success(
          'You have booked an appointment.Wait until you get accepted !'
        );
      });
  }

  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, index) => index + 1);
  }
}
