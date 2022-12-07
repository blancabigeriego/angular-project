import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";

import { GetFilmsService } from "src/app/services/get-films.service";
import { deleteCharacter, deleteCharacterSuccess} from "../actions/delete-character.action";

@Injectable()

export class deleteCharacterEffect{
    constructor(
        private actions$: Actions,
        private getFilmsService: GetFilmsService
    ){}

    deleteCharacter$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteCharacter),
            mergeMap(action => this.getFilmsService.deleteCharacter(action.id).pipe(
                map(result => deleteCharacterSuccess())
            )
        ),
    )
    
    });
}