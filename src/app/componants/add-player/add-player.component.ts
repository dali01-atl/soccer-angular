import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  playerForm: FormGroup;
  imagePreview:any;
  constructor(private formBuilder: FormBuilder, private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      date: [''],
      grandTitre: [''],
      commentaire: [''],
      image: ['']
    });

  }
  addPlayer() {
    this.playerService.addPlayer(this.player,this.playerForm.value.image).subscribe(
      () => {
        console.log('player added succesfully');
        this.router.navigate(['admin']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ image: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
