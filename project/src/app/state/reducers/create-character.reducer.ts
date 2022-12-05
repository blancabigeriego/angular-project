import { createReducer, on } from "@ngrx/store";
import { CreateCharacterSuccess, initCreateCharacter } from "../actions/create-character.action";

export interface CreateCharacterState{
    created: boolean,
}

export const initialState: CreateCharacterState = {
    created: false,
};

export const createCharacterReducer = createReducer(
    initialState,
    on(initCreateCharacter, (state)=>{
        return {
            ...state,
            created: false,
        };
    }),
    on(CreateCharacterSuccess, (state)=>{
        return{
            ...state,
            created: true,
        };
    })
);