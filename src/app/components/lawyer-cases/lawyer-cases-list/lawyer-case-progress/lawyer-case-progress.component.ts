import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../../Model/case.model';
import { ModifModalComponent } from './modif-modal/modif-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lawyer-case-progress',
  templateUrl: './lawyer-case-progress.component.html',
  styleUrls: ['./lawyer-case-progress.component.scss'],
})
export class LawyerCaseProgressComponent implements OnInit {
  modalRef: MdbModalRef<ModifModalComponent> | null = null;

  @Input() case!: Case;
  @Input() isLawyer!: boolean;

  constructor(
    private modalService: MdbModalService,
    private http: HttpClient
  ) {}

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

  openModal() {
    this.case.date = new Date(this.case.date).toISOString().substring(0, 10);
    console.log("rania",this.case.date);
    this.modalRef = this.modalService.open(ModifModalComponent, {
      data: this.case,
    });
    this.modalRef.onClose.subscribe(async (i: Case) => {
      i.date = new Date(i.date);
      console.log("rayen",i.date instanceof Date);

      this.http
        .patch('http://localhost:3000/appointment/update/' + i.id, i)
        .subscribe((result: any) => {
          this.case = result;
          location.reload();
        });
      console.log('case: ' + this.case);
    });
  }

  caseAccepted() {
    this.case.status = 'en cours';
    this.case.todos = [];
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
