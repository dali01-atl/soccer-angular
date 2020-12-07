import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-matchs',
  templateUrl: './add-matchs.component.html',
  styleUrls: ['./add-matchs.component.css']
})
export class AddMatchsComponent implements OnInit {
match:any={};
matchForm:FormGroup;
imagePreview:any;
  constructor(private formBuilder:FormBuilder, private matchService:MatchService
    ,private router:Router) { }

  ngOnInit(): void {
    this.matchForm=this.formBuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:[''],
      image:['']
    })
  }
  addMatch(){
    this.matchService.addMatch(this.match,this.matchForm.value.image).subscribe(
      () =>{
        console.log('Match added successfuly');
        this.router.navigate(['admin']);
      }
    )
    console.log('this is my match',this.match);
  }
  // this bleck is added from muller.js
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.matchForm.patchValue({ image: file });
    this.matchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
