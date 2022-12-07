import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EditCharacterState } from '../reducers/edit-character.reducer';

export const selectEditCharacterState = (state: AppState) => state.editCharacterState;

export const selectEditCharacterSuccess = createSelector(
    selectEditCharacterState,
    (state: EditCharacterState) => {
        return state.updated;
    }
);