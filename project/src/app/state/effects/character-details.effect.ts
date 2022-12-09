import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { GetFilmsService } from "src/app/services/get-films.service";
import {
  loadCharacter,
  loadingCharacter,
} from "src/app/state/actions/character-details.action";

@Injectable()
export class CharacterDetailsEffect {
  constructor(
    private actions$: Actions,
    private getFilmsService: GetFilmsService
  ) {}

  loadingCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingCharacter),
      mergeMap((action) =>
        this.getFilmsService.getCharacterById(action.id).pipe(
          map((character) => {
            return loadCharacter({ character });
          })
        )
      )
    );
  });
}
