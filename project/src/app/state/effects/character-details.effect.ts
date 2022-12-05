import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { GetDataService } from "src/app/services/get-data.service";
import { loadCharacter, loadingCharacter } from "src/app/actions/character-details.action";

@Injectable()
export class CharacterDetailsEffect{
    constructor(
        private actions$: Actions,
        private getDataService: GetDataService
    ){}

    loadingCharacter$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadingCharacter),
            mergeMap(action => this.getDataService.getCharacterById(action.id)
            .pipe(
                map(character => loadCharacter({ character }))
            ))
        )
    })
}