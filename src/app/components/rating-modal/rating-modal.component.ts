import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.scss'],
})
export class RatingModalComponent implements OnInit {
  constructor(public modalRef: MdbModalRef<RatingModalComponent>) {}

  cases: any = null;

  ngOnInit(): void {
    console.log(this.cases);
  }
}
