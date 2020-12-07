import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }
   @Input() x:any;
  ngOnInit() {
  }
  resultScore(a:number,b:number){
    if (a>b) {
      return ['win','green'];
    } else if (a===b) {
      return ['draw','blue'];
    } else{
      return ['loss','red'];
    }
  }
  scoreColor(a:number,b:number){
    if (a>b) {
      return 'green';
    } else if (a===b) {
      return 'blue';
    } else{
      return 'red';
    }
  }

}

