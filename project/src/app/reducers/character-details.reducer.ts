import { createReducer, on } from "@ngrx/store";
import { Character } from "../models/character.model";
import { loadCharacter } from "../actions/character-details.action";

export interface CharacterDetailState  {
    character: Character,
}

export const initialState: CharacterDetailState = {
 character: {} as Character,
};

export const characterDetailsReducer = createReducer(
initialState,
on(loadCharacter, (state, { character})=>{
    return {
        ...state,
        character: character
    };
})
)
