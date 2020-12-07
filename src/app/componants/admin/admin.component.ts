import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { StaduimService } from 'src/app/services/staduim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: any;
  matchess: any;
  player: any;

  stadiums:any;
  constructor(private userService:UserService,private stadiumService:StaduimService ,private playerService: PlayerService, private matchService:MatchService,private router:Router) { }

  ngOnInit() {
    this.getStadiums();
    this.getMatches();;
    this.getAllPlayers()
    this.getAllUsers();
    // this.userService.getAllUsers().subscribe(
    //   data => {
    //     this.user = data.users;
    //   }
    // );
    // this.stadiumService.getAllStadiums().subscribe(
    //   data => {
    //     this.user = data.stadiums;
    //   }
    // );
    // this.getMatches();

    // this.playerService.getAllPlayers().subscribe(
    //   x => {
    //     this.player = x.players;
    //   }
    // )
  }
  getMatches() {
    this.matchService.getAllMatches().subscribe(
      t => {
        this.matchess = t.matches;
      }
    );
  }
getAllPlayers(){
  this.playerService.getAllPlayers().subscribe(
    x => {
      this.player = x.players;
    }
  );

  
}
getAllUsers(){
  this.userService.getAllUsers().subscribe(
    data => {
      this.user = data.users;
    }
  );
}
  delete(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {

        this.getMatches();
        
      }
    );
  }
  deleteP(id: string) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        console.log('deleted');
       this.getAllPlayers();

      }
    );
  }
  deleteU(id: string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('deleted');
   this.getAllUsers();

      }
    );
  }
  edit(id:any){
    this.router.navigate([`edit-match/${id}`]);
  }
  editP(id:any){
    this.router.navigate([`edit-player/${id}`]);
  }
  editU(id:any){
    this.router.navigate([`edit-player/${id}`]);
  }
  display(id:any){
    this.router.navigate([`display-match/${id}`]);
  }
  displayP(id:any){
    this.router.navigate([`display-player/${id}`]);
  }
  displayU(id:any){
    this.router.navigate([`display-player/${id}`]);
  }
  getStadiums(){
    this.stadiumService.getAllStadiums().subscribe(
      data => {
        console.log('here my stadium', data.stadiums);
        
        this.stadiums = data.stadiums;
      }
    )
  }
  updateStadiums(gettedStadium:any){
    this.stadiums=gettedStadium;  
  
  }

}
