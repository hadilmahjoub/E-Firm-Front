import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LawyerCasesService } from 'src/app/services/lawyer-cases.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  enterSearchValue: string = '';
  // @Output()
  // searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


  constructor(private lawyerCasesService: LawyerCasesService) { }

  ngOnInit(): void {
  }

  onSearchTextChanged(){
    this.lawyerCasesService.onSearchTextChanged(this.enterSearchValue);
  }
}
