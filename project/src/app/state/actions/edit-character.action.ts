import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character.model";

export const initEditCharacter = createAction(
    '[Edit Character] Init Edit Character',
)

export const editCharacter = createAction(
    '[Edit Character] Edit Character',
    props<{ character: Character}>()
)

export const editCharacterSuccess = createAction(
    '[Edit Character] Edit Character Success',
)