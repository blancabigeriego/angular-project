// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { map, mergeMap } from "rxjs";
// import { GetFilmsService } from "src/app/services/get-films.service";
// import { editCharacter}

// @Injectable()
// export class EditCharacterEffects{
//     constructor(
//         private actions$: Actions,
//         private getFilmsService: GetFilmsService
//     ){}

//     editCharacter$ = createEffect(() => {
//         return this.actions$.pipe(
//             ofType(editCharacter),
//             mergeMap(action => this.getFilmsService.editCharacter(action.id)
//             .pipe(
//                 map(result => editCharacterSuccess)
//             ))
//         )
//     })







// }