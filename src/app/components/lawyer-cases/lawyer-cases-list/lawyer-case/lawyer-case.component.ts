import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../../Model/case.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';
import { ModifModalComponent } from '../lawyer-case-progress/modif-modal/modif-modal.component';

@Component({
  selector: 'app-lawyer-case',
  templateUrl: './lawyer-case.component.html',
  styleUrls: ['./lawyer-case.component.scss'],
})
export class LawyerCaseComponent implements OnInit {
  modalRef: MdbModalRef<ModifModalComponent> | null = null;

  @Input() case!: Case;
  @Input() isLawyer!: boolean;
  rated: boolean | undefined;

  constructor(
    private modalService: MdbModalService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.rated= false;
    if (this.isLawyer) {
      this.http
        .get(
          'http://localhost:3000/client/clientInfoByEmail/' +
            this.case.clientEmail
        )
        .subscribe((result: any) => {
          this.case.clientName = result.name + ' ' + result.Familyname;
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
    this.rated = true;
  }

  openModal() {
    this.modalRef = this.modalService.open(ModifModalComponent, {
      data: this.case,
    });
    this.modalRef.onClose.subscribe((i: Case) => {
      console.log('i:' + i);
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
