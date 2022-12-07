import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DeleteCharacterState } from '../reducers/delete-character.reducer';

export const selectDeleteCharacterState = (state: AppState) => state.deleteCharacterState;

export const selectDeleteCharacterSuccess = createSelector(
    selectDeleteCharacterState,
    (state: DeleteCharacterState)=>{
        return state.deleted;
    }
);
