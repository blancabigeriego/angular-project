import { createReducer, on } from "@ngrx/store";
import { editCharacterSuccess, initEditCharacter } from "../actions/edit-character.action";

export interface EditCharacterState {
    updated: boolean,
}

export const initialState: EditCharacterState = {
    updated: false,
};

export const editCharacterReducer = createReducer(
    initialState,
    on(initEditCharacter, (state)=> {
        return {
            ...state,
            updated: false,
        };
    }),

    on(editCharacterSuccess, (state)=>{
        return {
            ...state,
            updated: true,
        }
    })
)