import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { editCharacter, initEditCharacter } from 'src/app/state/actions/edit-character.action';
import { deleteCharacter, initDeleteCharacter } from 'src/app/state/actions/delete-character.action';
import { selectEditCharacterSuccess } from 'src/app/state/selector/edit-character.selector';
import { selectCharacter } from 'src/app/state/selector/character-details.selector';
import { deleteCharacterSuccess } from 'src/app/state/actions/delete-character.action';
import { selectDeleteCharacterSuccess } from 'src/app/state/selector/delete-character.selector';
import { loadingCharacter } from 'src/app/state/actions/character-details.action';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  id:number;
  deleteCharacterSuccess$: Observable<boolean>;
  editCharacterSuccess$: Observable<boolean>;
  character$: Observable<Character>;

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
    this.character$ = new Observable <Character>();
    this.deleteCharacterSuccess$ = new Observable();
    this.editCharacterSuccess$ = new Observable();
    this.nameInput = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.filmsInput = new FormControl([], [Validators.required]);
    this.shortFilmsInput = new FormControl([]);
    this.tvShowsInput = new FormControl([]);
    this.videoGamesInput = new FormControl([], [Validators.required]);
    this.parkAttractionsInput = new FormControl([], [Validators.required]);
    this.alliesInput = new FormControl([], [Validators.required, Validators.minLength(2)]);
    this.enemiesInput = new FormControl([]);
    this.imageInput = new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)]);
    this.id = 0;
    

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
    this.id = this.route.snapshot.params['id'];
    this.editCharacterSuccess$ = this.store.select(selectEditCharacterSuccess);
    this.deleteCharacterSuccess$ = this.store.select(selectDeleteCharacterSuccess);
    //this.character$ = this.store.select(selectCharacter);
    this.store.dispatch(loadingCharacter({ id: this.id}));
    
    
    this.store.select(selectCharacter).subscribe((character)=>{
      if(character){
        this.editForm.patchValue({
          name: character.name,
          films: character.films.join("\n"),
          videoGames: character.videoGames.join("\n"),
          shortFilms: character.shortFilms.join("\n"),
          tvShows: character.tvShows.join("\n"),
          parkAttractions: character.parkAttractions.join("\n"),
          allies: character.allies.join("\n"),
          enemies: character.enemies.join("\n"),
          imageUrl: character.imageUrl,

        })
     }
     })
    //this.store.dispatch(initEditCharacter());
    //this.store.dispatch(initDeleteCharacter());

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
   let deletedCharacterId: number = this.route.snapshot.params['id']
    
  

    this.store.dispatch(deleteCharacter({id: deletedCharacterId,}));
    this.deleteCharacterSuccess$.subscribe(success =>{
      if(success){
        alert('You have deleted the character!');
        this.router.navigate(['/characters']);
      }
    })


  }

}
