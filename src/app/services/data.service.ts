import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let players = [
      { id: 1, date: '01/01/2020', grandTitre: 'ramos quitte real madrid', commentaire: 'info sport', image: 'assets/images/img_2.jpg' },
      { id: 2, date: '01/05/2020', grandTitre: 'ramos rejoin fbc', commentaire: 'info ....', image: 'assets/images/img_2.jpg' },
      { id: 3, date: '01/01/2020', grandTitre: 'ramos quitte real madrid', commentaire: ' sport', image: 'assets/images/img_2.jpg' },
      { id: 4, date: '05/04/1995', grandTitre: 'ronaldo est le star de l anneé', commentaire: 'parlons sport', image: 'assets/images/img_2.jpg' },
      { id: 5, date: '05/01/2004', grandTitre: 'zidane est le star de l anneé', commentaire: ' sport', image: 'assets/images/img_2.jpg' },
      { id: 6, date: '05/05/2009', grandTitre: 'zidane est le star de l anneé', commentaire: ' sport', image: 'assets/images/img_2.jpg' },
      { id: 7, date: '05/05/2010', grandTitre: 'zidane est le star de l anneé', commentaire: 'parlons sport', image: 'assets/images/img_2.jpg' },
      { id: 8, date: '05/05/2011', grandTitre: 'zidane est le star de l anneé', commentaire: 'parlons sport', image: 'assets/images/img_2.jpg' }
    ];
    let matches = [
      { id: 1, scoreOne: 2, scoreTwo: 3, teamOne: 'fcb', teamTwo: 'rel' },
      { id: 2, scoreOne: 2, scoreTwo: 3, teamOne: 'fcb', teamTwo: 'rel' },
      { id: 3, scoreOne: 1, scoreTwo: 3, teamOne: 'icb', teamTwo: 'rpl' },
      { id: 4, scoreOne: 5, scoreTwo: 7, teamOne: 'kkb', teamTwo: 'fde' }

    ];
    let admins = [
      { id: 1, nom: 'mohamed', prenom: 'boubaker', email: 'mohamed@g.com' },
      { id: 2, nom: 'anis', prenom: 'boubaker', email: 'anis@g.com' }
    ];
    

    return { matches, players, admins };
  }
}
