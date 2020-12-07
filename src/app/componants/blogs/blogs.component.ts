import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
blogs:any;
  constructor() { }

  ngOnInit() {
    this.blogs=[
      {id:1, date:'01/01/2020', grandTitre:'ramos quitte real madrid', commentaire:'info sport', },
      {id:2, date:'01/05/2020', grandTitre:'ramos rejoin fbc', commentaire:'info ....', },
      {id:3, date:'01/01/2020', grandTitre:'ramos quitte real madrid', commentaire:' sport', },
      {id:4, date:'05/04/1995', grandTitre:'ronaldo est le star de l anneé', commentaire:'parlons sport', },
      {id:5, date:'05/01/2004', grandTitre:'zidane est le star de l anneé', commentaire:' sport', },
      {id:6, date:'05/05/2009', grandTitre:'zidane est le star de l anneé', commentaire:' sport', },
      {id:7, date:'05/05/2010', grandTitre:'zidane est le star de l anneé', commentaire:'parlons sport', },
      {id:8, date:'05/05/2011', grandTitre:'zidane est le star de l anneé', commentaire:'parlons sport', }
    ]
  }

}
