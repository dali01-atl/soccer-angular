import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchess',
  templateUrl: './matchess.component.html',
  styleUrls: ['./matchess.component.css']
})
export class MatchessComponent implements OnInit {
  // variable globale 
  matches: any;
  constructor(private matchService:MatchService) { }

  ngOnInit() {
   this.matchService.getAllMatches().subscribe(
     data => {
       this.matches=data.matches; 
     }
   );
  }

}
