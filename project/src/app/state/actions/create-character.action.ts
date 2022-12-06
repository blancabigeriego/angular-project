import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character.model";

export const initCreateCharacter =  createAction(
    '[Create Character], Init Create Character',
);

export const CreateCharacter = createAction(
    '[Create Character], Create Character',
    props<{ character: Character}>()
);

export const CreateCharacterSuccess = createAction(
    '[Create Character], Create Character Success',
);
