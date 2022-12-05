import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { charactersReducer, CharacterState } from 'src/app/state/reducers/characters.reducer';

export const selectCharacterState = (state: AppState) => state.charactersState;

export const selectCharacters = createSelector(
    selectCharacterState,
    (state: CharacterState)=> {
        return state.characters;
    }
);

export const selectLoading = createSelector(
    selectCharacterState,
    (state: CharacterState) => {
        return state.loading;
    }
);
