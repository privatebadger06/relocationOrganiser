import { Component, OnInit } from '@angular/core';

export interface taskContent{
  taskName:string;
  highPriority:boolean;
  category:string;

}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
