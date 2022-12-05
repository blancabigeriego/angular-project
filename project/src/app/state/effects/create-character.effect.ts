import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { GetFilmsService } from "src/app/services/get-films.service";
import { CreateCharacter, CreateCharacterSuccess } from "../actions/create-character.action";

@Injectable()
export class CreateCharacterEffects {
    constructor(
        private actions$: Actions,
        private getFilmsService: GetFilmsService
    ){}

    createCharacter$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(CreateCharacter),
          mergeMap(action => this.getFilmsService.createCharacter(action.character) 
            .pipe(
              map(result => CreateCharacterSuccess()
              )
            ),
          )
        );
       
      });
}