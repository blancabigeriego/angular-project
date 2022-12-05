
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { GetDataService } from "src/app/services/get-data.service";
import { loadCharacters, loadingCharacters } from "src/app/actions/characters.action";

@Injectable()
export class CharactersEffects {
    constructor(
        private actions$: Actions,
        private getDataService: GetDataService
    ){}


loadingCharacters$ = createEffect(()=> {
    return this.actions$.pipe(
        ofType(loadingCharacters),
        mergeMap(()=> this.getDataService.getCharacters()
        .pipe(
            map(characters => loadCharacters ({ characters }),
            )
        ))
    )
})}