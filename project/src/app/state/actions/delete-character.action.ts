import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character.model";

export const deleteCharacter = createAction(
    '[Delete Character] Delete Character',
    props<{ character: Character}>()
)

export const deleteCharacterSuccess = createAction(
    '[Delete Character] Delete Character Success',
)
