import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {

  @Input() s:any;
  @Output() newStadiums: EventEmitter<any> = new EventEmitter();
  constructor(private stadiumService:StaduimService) { }

  ngOnInit(): void {
  }
  deleteStadium(id:any){
    this.stadiumService.deleteStadium(id).subscribe(
      ()=>{
        console.log('satdium deleted');
        this.stadiumService.getAllStadiums().subscribe(
          data=>{
            this.newStadiums.emit(data.stadiums)
          }
        )
      }

    )
}

}
