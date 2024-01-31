import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../../Model/case.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lawyer-case-demand',
  templateUrl: './lawyer-case-demand.component.html',
  styleUrls: ['./lawyer-case-demand.component.scss'],
})
export class LawyerCaseDemandComponent implements OnInit {
  @Input() case!: Case;
  @Input() isLawyer!: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.isLawyer) {
      this.http
        .get(
          'http://localhost:3000/client/clientInfoByEmail/' +
            this.case.clientEmail
        )
        .subscribe((result: any) => {
          this.case.clientName = result.name + ' ' + result.FamilyName;
        });
    } else {
      this.getLawyerName();
    }
  }

  rate(n: number) {
    this.http
      .patch('http://localhost:3000/appointment/rated/' + this.case.id, '')
      .subscribe((result) => {
        console.log(result);
      });
    this.http
      .post(
        'http://localhost:3000/lawyer/updateRating/' +
          this.case.lawyerEmail +
          '/' +
          n,
        ''
      )
      .subscribe((result) => {
        console.log(result);
      });
  }

  caseAccepted() {
    this.case.status = 'en cours'; this.case.todos = [];
    this.case.date = new Date();

    this.http
      .patch(
        'http://localhost:3000/appointment/update/' + this.case.id,
        this.case
      )
      .subscribe((result: any) => {
        location.reload();
      });
  }

  caseDeleted() {
    this.http
      .delete('http://localhost:3000/appointment/delete/' + this.case.id)
      .subscribe((result: any) => {
        location.reload();
      });
  }

  async getLawyerName() {
    this.http
      .get(
        'http://localhost:3000/lawyer/lawyerInfoByEmail/' +
          this.case.lawyerEmail
      )
      .subscribe((result: any) => {
        this.case.clientName =
          'Maitre ' + result.FamilyName + ' ' + result.name;
      });
  }
}
