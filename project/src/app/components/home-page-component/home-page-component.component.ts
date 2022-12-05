import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { loadCharacters, loadingCharacters } from 'src/app/actions/characters.action';
import { AppState } from 'src/app/state/app.state';
import { GetDataService } from 'src/app/services/get-data.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css']
})
export class HomePageComponentComponent implements OnInit {
 

  loading$: Observable<boolean>;
  characters$: Observable<Character[]>;

  constructor( private store: Store<AppState>,
    private GetDataService: GetDataService
    ){
    this.loading$ = new Observable<boolean>();
    this.characters$ = new Observable<Character[]>();
  }

  ngOnInit(): void{

    this.loading$ = this.store.select(state => state.charactersState.loading);
    this.characters$ = this.store.select(state =>
     state.charactersState.characters )

    this.store.dispatch(loadingCharacters());

    this.GetDataService.getCharacters().subscribe((characters)=>{ this.store.dispatch(loadCharacters({ characters }));
  })
  }
}
