import { ActionReducerMap } from "@ngrx/store";
import { charactersReducer, CharacterState } from "./reducers/characters.reducer";
import { characterDetailsReducer, CharacterDetailState } from "./reducers/character-details.reducer";
import { CreateCharacterState, createCharacterReducer } from "./reducers/create-character.reducer";
import { editCharacterReducer, EditCharacterState } from "./reducers/edit-character.reducer";
import { deleteCharacterReducer, DeleteCharacterState } from "./reducers/delete-character.reducer";


export interface AppState {
    charactersState: CharacterState;
    characterDetailState: CharacterDetailState;
    createCharacterState: CreateCharacterState;
    editCharacterState: EditCharacterState;
    deleteCharacterState: DeleteCharacterState;
    
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    charactersState: charactersReducer,
    characterDetailState: characterDetailsReducer,
    createCharacterState: createCharacterReducer,
    editCharacterState: editCharacterReducer,
    deleteCharacterState:
    deleteCharacterReducer,


};