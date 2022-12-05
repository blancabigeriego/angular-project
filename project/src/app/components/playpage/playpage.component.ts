import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { CreateCharacter, initCreateCharacter } from 'src/app/state/actions/create-character.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateCharacterSuccess } from 'src/app/state/selector/create-character.selector';

@Component({
  selector: 'app-playpage',
  templateUrl: './playpage.component.html',
  styleUrls: ['./playpage.component.css']
})
export class PlaypageComponent implements OnInit {


  createCharacterSuccess$: Observable<boolean>;

  createForm: FormGroup;
  nameInput: FormControl;
  filmsInput: FormControl;
  tvShowsInput: FormControl;
  videoGamesInput: FormControl;
  parkAttractionsInput: FormControl;
  alliesInput: FormControl;
  enemiesInput: FormControl;
  imageInput: FormControl;


  constructor(
    private store: Store<AppState>,
    private router: Router,
  ){
    this.createCharacterSuccess$ = new Observable();
    this.nameInput = new FormControl('', [Validators.required]);
    this.filmsInput = new FormControl('',[Validators.required]);
    this.tvShowsInput = new FormControl('', [Validators.required]);
    this.videoGamesInput = new FormControl('', [Validators.required]);
    this.parkAttractionsInput = new FormControl('', [Validators.required]);
    this.alliesInput = new FormControl('', [Validators.required]);
    this.enemiesInput = new FormControl('');
    this.imageInput = new FormControl('', [Validators.required]);

    this.createForm = new FormGroup({
      name: this.nameInput,
      films: this.filmsInput,
      tvShowsInput: this.tvShowsInput,
      videoGames: this.videoGamesInput,
      parkAttractions: this.parkAttractionsInput,
      allies: this.alliesInput,
      enemies: this.enemiesInput,
      image: this.imageInput
    });
  }
  ngOnInit(): void {
    this.createCharacterSuccess$ = this.store.select(selectCreateCharacterSuccess);

    this.store.dispatch(initCreateCharacter());
  }

  createCharacter(): void {
    this.store.dispatch(CreateCharacter({ character: this.createForm.value}));

    this.createCharacterSuccess$.subscribe(success =>{
      if(success){
        alert('Well done!! You have created your own Character!')
      } else{
        alert('Something went wrong, please try again!')
      }
    })
  }
}
