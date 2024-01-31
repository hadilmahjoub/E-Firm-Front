import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent implements OnInit {
  @Input() imgSource!: string;
  @Input() imgCols!: number;
  @Input() title!: string;
  @Input() text!: string;
  @Input() hasBtn: boolean = false;
  @Input() btn: string = '';
  @Input() btnLink: string = '';
  @Input() flexReverse: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
