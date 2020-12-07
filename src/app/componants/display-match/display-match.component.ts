import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  match: any = {};
  id: any;
  constructor(private activatedRoute:ActivatedRoute,
    private matchService:MatchService) { }

  ngOnInit(): void {
    // this.id= ces classe permet de capter notre id apartir le url ou le navigateur
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data =>{
        this.match=data.match ;
      }

    )

  }

}
