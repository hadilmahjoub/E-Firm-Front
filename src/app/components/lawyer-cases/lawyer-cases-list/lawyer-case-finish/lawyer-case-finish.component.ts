import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../../../Model/case.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lawyer-case-finish',
  templateUrl: './lawyer-case-finish.component.html',
  styleUrls: ['./lawyer-case-finish.component.scss']
})
export class LawyerCaseFinishComponent implements OnInit {
  

  @Input() case!: Case ;
  
  //public clientName!: string;
  //public name!: string;
  @Input() isLawyer!: boolean;


  constructor(private modalService: MdbModalService, private http: HttpClient) { }

  ngOnInit(): void {
    if(this.isLawyer){
      this.http.get('http://localhost:3000/client/clientInfoByEmail/'+this.case.clientEmail)
    .subscribe((result: any) =>{
      this.case.clientName= result.name +' ' + result.FamilyName ;
    })
    }
    else{
      this.getLawyerName();
    }
    
  }
  
  rate(n : number) {
    this.http.patch('http://localhost:3000/appointment/rated/'+ this.case.id ,"") 
    .subscribe((result) => {console.log(result);})
    this.http.post('http://localhost:3000/lawyer/updateRating/'+ this.case.lawyerEmail + '/' + n ,"") 
    .subscribe((result) => {console.log(result);})
  }

  async getLawyerName(){
    this.http.get("http://localhost:3000/lawyer/lawyerInfoByEmail/"+this.case.lawyerEmail)
    .subscribe((result: any) => {
    this.case.clientName="Maitre "+ result.FamilyName+" "+ result.name  ;
    })
  }
}
