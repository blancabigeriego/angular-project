import { ActionReducerMap } from "@ngrx/store";
import { charactersReducer, CharacterState } from "../reducers/characters.reducer";
import { characterDetailsReducer, CharacterDetailState } from "../reducers/character-details.reducer";


export interface AppState {
    charactersState: CharacterState;
    characterDetailState: CharacterDetailState;

};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    charactersState: charactersReducer,
    characterDetailState: characterDetailsReducer
};