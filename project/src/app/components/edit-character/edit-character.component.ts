import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { editCharacter, initEditCharacter } from 'src/app/state/actions/edit-character.action';
import { selectEditCharacterSuccess } from 'src/app/state/selector/edit-character.selector';
import { selectCharacter } from 'src/app/state/selector/character-details.selector';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  editCharacterSuccess$: Observable<boolean>;
  character$: Observable<Character>

  editForm: FormGroup;
  nameInput: FormControl;
  filmsInput: FormControl;
  shortFilmsInput: FormControl;
  tvShowsInput: FormControl;
  videoGamesInput: FormControl;
  parkAttractionsInput: FormControl;
  alliesInput: FormControl;
  enemiesInput: FormControl;
  imageInput: FormControl;



  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,

  ){
    this.editCharacterSuccess$ = new Observable();
    this.nameInput = new FormControl('', [Validators.required]);
    this.filmsInput = new FormControl([], [Validators.required]);
    this.shortFilmsInput = new FormControl([]);
    this.tvShowsInput = new FormControl([]);
    this.videoGamesInput = new FormControl([], [Validators.required]);
    this.parkAttractionsInput = new FormControl([], [Validators.required]);
    this.alliesInput = new FormControl([], [Validators.required]);
    this.enemiesInput = new FormControl([]);
    this.imageInput = new FormControl('', [Validators.required]);
    this.character$ = new Observable <Character>();

    this.editForm = new FormGroup({
      name: this.nameInput,
      films: this.filmsInput,
      tvShows: this.tvShowsInput,
      parkAttractions: this.parkAttractionsInput,
      allies: this.alliesInput,
      enemies: this.enemiesInput,
      imageUrl: this.imageInput,
      videoGames: this.videoGamesInput,
      shortFilms: this.shortFilmsInput
    });

   
  }
  ngOnInit(): void{
    this.editCharacterSuccess$ = this.store.select(selectEditCharacterSuccess);
    this.character$ = this.store.select(selectCharacter)
    this.store.dispatch(initEditCharacter());

  }

  editCharacter(): void{
    let editedCharacter = new Character(
      this.filmsInput.value.trim().split('\n'),
      this.shortFilmsInput.value.trim().split('\n'),
      this.tvShowsInput.value.trim().split('\n'),
      this.videoGamesInput.value.trim().split('\n'),
      this.parkAttractionsInput.value.trim().split('\n'),
      this.alliesInput.value.trim().split('\n'),
      this.enemiesInput.value.trim().split('\n'),
      this.route.snapshot.params['id'],
      this.nameInput.value,
      this.imageInput.value,

    )
    this.store.dispatch(editCharacter({character: editedCharacter,}));

    // this.character$.subscribe(character => {
    //   if(character){
    //     alert('Character updated succesfully!!');
    //     this.router.navigate(['/characters']);
    //   }
    // })

    this.editCharacterSuccess$.subscribe(success =>{
      console.log(success);
      if(success){
        alert('Character updated succesfully!!');
        this.router.navigate(['/characters']);
      }
    })
  }

  deleteCharacter(): void{
   let deletedCharacter = new Character(
    this.filmsInput.value.trim().split('\n'),
    this.shortFilmsInput.value.trim().split('\n'),
    this.tvShowsInput.value.trim().split('\n'),
    this.videoGamesInput.value.trim().split('\n'),
    this.parkAttractionsInput.value.trim().split('\n'),
    this.alliesInput.value.trim().split('\n'),
    this.enemiesInput.value.trim().split('\n'),
    this.route.snapshot.params['id'],
    this.nameInput.value,
    this.imageInput.value,
    )

  }

}
