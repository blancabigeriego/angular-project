
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { GetFilmsService } from "src/app/services/get-films.service";
import { loadCharacters, loadingCharacters } from "src/app/state/actions/characters.action";

@Injectable()
export class CharactersEffects {
    constructor(
        private actions$: Actions,
        private getFilmsService: GetFilmsService
    ){}


loadingCharacters$ = createEffect(()=> {
    return this.actions$.pipe(
        ofType(loadingCharacters),
        mergeMap(()=> this.getFilmsService.getCharacters()
        .pipe(
            map(characters => loadCharacters ({ characters }),
            )
        ))
    )
})}