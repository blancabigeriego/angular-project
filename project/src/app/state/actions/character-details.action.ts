import { createAction, props } from "@ngrx/store";
import { Character } from "../../models/character.model";

export const loadingCharacter = createAction(
    '[Character Details] Loading Character',
    props<{ id: number }>()

);

export const loadCharacter = createAction(
    '[Character Details] Load Character',
    props<{ character: Character }>()
);