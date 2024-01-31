import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.scss'],
})
export class SignPageComponent implements OnInit {
  @Input() leftText!: string;
  @Input() leftLink!: string;
  @Input() rightText!: string;
  @Input() rightLink!: string;

  constructor() {}

  ngOnInit(): void {}
}
