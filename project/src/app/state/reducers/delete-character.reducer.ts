import { createReducer, on } from "@ngrx/store";
import { deleteCharacterSuccess, initDeleteCharacter } from "../actions/delete-character.action";

export interface DeleteCharacterState {
    deleted: boolean,
}

export const initialState: DeleteCharacterState = {
    deleted: false,
};

export const deleteCharacterReducer = createReducer(
    initialState,
    on(initDeleteCharacter, (state)=>{
        return{
            ...state,
            deleted: false,
        };
    }),
    on(deleteCharacterSuccess, (state)=>{
        return{
            ...state,
            deleted: true,
        };
    })
);

