import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-child',
  templateUrl: './admin-child.component.html',
  styleUrls: ['./admin-child.component.css']
})
export class AdminChildComponent implements OnInit {
@Input() x:any;
  constructor() { }

  ngOnInit() {
  }

}
