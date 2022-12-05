import { createReducer, on } from "@ngrx/store";
import { Character } from "../../models/character.model";
import { loadCharacters, loadingCharacters } from "../actions/characters.action";


export interface CharacterState {
    loading: boolean,
    characters: Character[],
}

export const initialState: CharacterState = {
    characters: [],
    loading: false,
};

export const charactersReducer = createReducer(
    initialState,
    on(loadingCharacters, (state)=>{
        return {
            ...state,
            loading: true,
        };
    }),
    on (loadCharacters, (state, { characters })=> {
        return {
            ...state,
            characters: characters,
            loading: false,
        };
    })
);