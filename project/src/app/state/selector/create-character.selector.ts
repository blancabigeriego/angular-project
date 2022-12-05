import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateCharacterState } from '../reducers/create-character.reducer';

export const selectCreateCharacterState = (state: AppState) => state.createCharacterState;

export const selectCreateCharacterSuccess = createSelector(
    selectCreateCharacterState,
    (state: CreateCharacterState)=>{
        return state.created;
    }
);