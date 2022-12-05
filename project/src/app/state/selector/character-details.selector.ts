
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharacterDetailState } from 'src/app/state/reducers/character-details.reducer';

export const selectCharacterDetailState = (state: AppState) => state.characterDetailState;

export const selectCharacter = createSelector(
    selectCharacterDetailState,
    (state: CharacterDetailState)=>{
        return state.character;
    }
);