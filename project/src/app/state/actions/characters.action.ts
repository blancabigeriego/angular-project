
import { createAction, props } from "@ngrx/store";
import { Character } from "../../models/character.model";

export const loadingCharacters = createAction( '[Characters] Loading Characters',);

export const loadCharacters =
createAction('[Characters] Load Characters', props<{ characters: Character[] }>()
);

