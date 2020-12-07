import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  match: any = {};
  matchForm: FormGroup;
  id: any;
  constructor(
    private formBuilder: FormBuilder, 
    private matchService: MatchService,
    private router: Router, 
    private activated: ActivatedRoute) { }


  ngOnInit(): void {
    //3ana activeted houwa module yjib url mte3na wbech nsobouha fel variable id 
    this.id = this.activated.snapshot.paramMap.get('id');
    //on va faire appelle pour le service pour quil nous envoie notre objet identifier par notre id 
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data.match;
      }
    )
    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })
  }
  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
