import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any;
  //on a injecter player services dans le contructor 
  constructor( private playerService:PlayerService) { }

  ngOnInit(){ 
    //on a fait l'appelle a notre fonction getall... et on a fait subscribe pour donner le retour du fonction eli yetmathel fel les donnes 
    this.playerService.getAllPlayers().subscribe(
      //jebet el data eli 3andi w ba3ed sabithha fel variable globale mte3na eli esmou players:any
      data => {
        this.players=data.players;
      }
    );
  }

}
