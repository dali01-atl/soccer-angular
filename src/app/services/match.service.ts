import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
 // matchUrl = 'api/matches';
 matchUrl='http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  getAllMatches() {
    return this.httpClient.get<{message:string,matches:any}>(`${this.matchUrl}/allMatches`);
  }
  deleteMatch(id: string) {
    return this.httpClient.delete(`${this.matchUrl}/deleteMatch/${id}`);
  }

  addMatch(match: any,image:File) {
    console.log('match in service' , match);
    
    // 3ayatet lel bostajji wel action heya post lel adress matchurl wyhez el objet match
    //on a importer l'image de add match.ts et leur type est File
    let formData=new FormData();
    // form data nous permet d'ajouter l'objet et l'image mais 
    //seullement sous cette forme  elle se compose d'un clé est un valeur ('teamOne',match.teamOne)
    formData.append('teamOne',match.teamOne);
    formData.append('teamTwo',match.teamTwo);
    formData.append('scoreOne',match.scoreOne);
    formData.append('scoreTwo',match.scoreTwo);
    formData.append('image',image);
    return this.httpClient.post(`${this.matchUrl}/addMatch`, formData);
  }
  //id: string parce que notre id est identifier automatiquement
  getMatchById(id: string) {
    // /displayMatch/   l'adresse
    //<{match:any}> c'est le retour de back end  
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/displayMatch/${id}`);
  }

  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/editMatch/${match._id}`, match);
    
  }
  searchMatch(term:any){
    return this.httpClient.get<{searchedMatches:any}>(`${this.matchUrl}/api/search/${term}`)
  }
}
