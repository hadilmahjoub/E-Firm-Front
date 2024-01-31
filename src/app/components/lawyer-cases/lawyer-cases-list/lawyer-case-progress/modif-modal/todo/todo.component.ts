import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  @Input() items!: string[];
  public newTask!: string;

  public addToList() {
    console.log(this.items);
    if (this.newTask.trim().length){
      this.items.push(this.newTask);
      this.newTask = '';
    }

    console.log(this.items);
    
  }

  public deleteTask(index: any) {
    this.items.splice(index, 1);
  }
  ngOnInit(): void {}
}
