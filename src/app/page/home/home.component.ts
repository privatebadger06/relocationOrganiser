import { Component, OnInit } from '@angular/core';

export interface NavItem {
  linkText : string;
  path : string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public navList:NavItem[] =[
    {
      linkText: 'Dashboard',
      path : '/dashboard'
    },

    {
      linkText:'Tasks',
      path : '/task'
    }
  ]

  ngOnInit(): void {
  }

}
