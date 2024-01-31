import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-avocat',
  templateUrl: './espace-avocat.component.html',
  styleUrls: ['./espace-avocat.component.scss']
})
export class EspaceAvocatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewDate: Date = new Date();

}
