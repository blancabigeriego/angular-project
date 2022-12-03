import { ActionReducerMap } from "@ngrx/store";
import { charactersReducer, CharacterState } from "../reducers/characters.reducer";

export interface AppState {
    charactersState: CharacterState;
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    charactersState: charactersReducer,
};