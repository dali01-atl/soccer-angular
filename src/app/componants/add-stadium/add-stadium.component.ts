import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium:any={};
  stadiumForm:FormGroup;
  imagePreview:any;
    constructor(private formBuilder:FormBuilder, private stadiumService:StaduimService
      ,private router:Router) { }
  
    ngOnInit(): void {
      this.stadiumForm=this.formBuilder.group({
       name:[''],
        country:[''],
        capacity:['']
       
      })
    }
    addStadium(){
      this.stadiumService.addStadium(this.stadium).subscribe(
        () =>{
          console.log('Match added successfuly');
          this.router.navigate(['admin']);
        }
      )
      console.log('this is my match',this.stadium);
    }
    // this bleck is added from muller.js
   
  

}
