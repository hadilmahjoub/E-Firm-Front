import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-template',
  templateUrl: './profile-template.component.html',
  styleUrls: ['./profile-template.component.scss']
})
export class ProfileTemplateComponent implements OnInit {

  @Input() name!: string;
  @Input() familyName!: string;
  @Input() email!: string;
  @Input() phoneNumber!: string;
  @Input() address!: string;
  @Input() speciality!: string;
  @Input() isLawyer!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
