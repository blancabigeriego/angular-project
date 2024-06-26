import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, take } from "rxjs";
import { Character } from "src/app/models/character.model";
import {
  CreateCharacter,
  initCreateCharacter,
} from "src/app/state/actions/create-character.action";
import { AppState } from "src/app/state/app.state";
import { characterDetailsReducer } from "src/app/state/reducers/character-details.reducer";
import { selectCreateCharacterSuccess } from "src/app/state/selector/create-character.selector";
import { filter, map } from "rxjs/operators";
import { CustomValidators } from "src/app/utils/custom-validator";

@Component({
  selector: "app-playpage",
  templateUrl: "./playpage.component.html",
  styleUrls: ["./playpage.component.css"],
})
export class PlaypageComponent implements OnInit {
  createCharacterSuccess$: Observable<boolean>;

  createForm: FormGroup;
  nameInput: FormControl;
  filmsInput: FormControl;
  shortFilmsInput: FormControl;
  tvShowsInput: FormControl;
  videoGamesInput: FormControl;
  parkAttractionsInput: FormControl;
  alliesInput: FormControl;
  enemiesInput: FormControl;
  imageInput: FormControl;

  constructor(private store: Store<AppState>, private router: Router) {
    this.createCharacterSuccess$ = new Observable();
    this.nameInput = new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      CustomValidators.noCurse,
    ]);
    this.filmsInput = new FormControl(
      [],
      [Validators.required, CustomValidators.noCurse]
    );
    this.shortFilmsInput = new FormControl(
      [],
      [Validators.required, CustomValidators.noCurse]
    );
    this.tvShowsInput = new FormControl(
      [],
      [Validators.required, CustomValidators.noCurse]
    );
    this.videoGamesInput = new FormControl(
      [],
      [Validators.required, CustomValidators.noCurse]
    );
    this.parkAttractionsInput = new FormControl(
      [],
      [Validators.required, CustomValidators.noCurse]
    );
    this.alliesInput = new FormControl(
      [],
      [Validators.required, Validators.minLength(2), CustomValidators.noCurse]
    );
    this.enemiesInput = new FormControl([], CustomValidators.noCurse);
    this.imageInput = new FormControl("", [
      Validators.required,
      Validators.pattern(
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
      ),
      CustomValidators.noCurse,
    ]);

    this.createForm = new FormGroup({
      name: this.nameInput,
      films: this.filmsInput,
      tvShows: this.tvShowsInput,
      videoGames: this.videoGamesInput,
      parkAttractions: this.parkAttractionsInput,
      allies: this.alliesInput,
      enemies: this.enemiesInput,
      image: this.imageInput,
    });
  }
  ngOnInit(): void {
    this.createCharacterSuccess$ = this.store.select(
      selectCreateCharacterSuccess
    );

    //this.store.dispatch(initCreateCharacter());
  }

  createCharacter(): void {
    try {
      let submittedCharacter = new Character(
        this.filmsInput.value.trim().split("\n"),
        this.shortFilmsInput.value.trim().split("\n"),
        this.tvShowsInput.value.trim().split("\n"),
        this.videoGamesInput.value.trim().split("\n"),
        this.parkAttractionsInput.value.trim().split("\n"),
        this.alliesInput.value.trim().split("\n"),
        this.enemiesInput.value.trim().split("\n"),
        0,
        this.nameInput.value,
        this.imageInput.value
      );
      console.log(submittedCharacter);

      this.store.dispatch(
        CreateCharacter({
          character: submittedCharacter,
        })
      );
    } catch (error) {
      console.log(error);
    }

    this.createCharacterSuccess$.subscribe((success) => {
      if (success) {
        alert("Well done!! You have created your own Character!");
        this.router.navigate(["/characters"]);
      }
    });
  }
}
