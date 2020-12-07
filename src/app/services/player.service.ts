import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // 7adharet el adresss wel players heya eli m3areef biha fel data services comme un tableau d'objet 
  //playerUrl = 'api/players';
  playerUrl='http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getAllPlayers(): Observable<any> {
    // b3ath el serveur lel adress playerurl bech yjib (get) eli fel players el kol eli mawjoud fel data services
    return this.httpClient.get<{message:string,players:any}>(`${this.playerUrl}/allPlayers`);
  }
  deletePlayer(id: string) {
    return this.httpClient.delete(`${this.playerUrl}/deletePlayer/${id}`);
  }
  addPlayer(player: any,image:File) {
    console.log('playerin service',player)
    let formData= new FormData();
    formData.append('date',player.date);
    formData.append('grandTitre',player.grandTitre);
    formData.append('commentaire',player.commentaire);
    formData.append('image',image);
    return this.httpClient.post(`${this.playerUrl}/addPlayer`, formData);
  }
  getPlayerById(id: string) {
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/displayPlayer/${id}`);
  }
  editPlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player._id}`, player);
  }
}
