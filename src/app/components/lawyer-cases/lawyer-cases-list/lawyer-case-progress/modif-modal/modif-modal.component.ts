import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modif-modal',
  templateUrl: './modif-modal.component.html',
  styleUrls: ['./modif-modal.component.scss'],
})
export class ModifModalComponent implements OnInit {
  id!: string;
  clientName!: string;
  lawyerEmail!: string;
  clientEmail!: string;
  type!: string;
  description!: string;
  date!: Date;
  status!: string;
  todos!: string[];

  constructor(
    private http: HttpClient,
    public modalRef: MdbModalRef<ModifModalComponent>
  ) {}

  close(): void {
    const i = {
      clientName: this.clientName,
      id: this.id,
      type: this.type,
      description: this.description,
      status: this.status,
      date: this.date,
      todos: this.todos,
    };
    console.log('todos in modal while closing', i.todos);
    this.modalRef.close(i);
  }
  ngOnInit(): void {
    console.log('todos in modal while init', this.todos);
    this.http
      .get('http://localhost:3000/client/clientInfoByEmail/' + this.clientEmail)
      .subscribe((result: any) => {
        this.clientName = result.name + ' ' + result.FamilyName;
      });
  }
}
