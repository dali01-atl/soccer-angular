import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaduimService {

  stadiumUrl='http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getAllStadiums() {
    return this.httpClient.get<{message:string,stadiums:any}>(`${this.stadiumUrl}/allStadium`);
  }
 

  addStadium(stadium: any) {
    console.log('match in service' , stadium);
    
    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File

    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
   ;
   
    return this.httpClient.post(`${this.stadiumUrl}/addStadium`, stadium);
  }
  //id: string parce que notre id est identifier automatiquement
  getStadiumById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{staduim:any}>(`${this.stadiumUrl}/displayStadium/${id}`);
  }
  deleteStadium(id: string) {
    return this.httpClient.delete(`${this.stadiumUrl}/deleteStadium/${id}`);
  }
  
}
