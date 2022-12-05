import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Character } from 'src/app/models/character.model';
import { selectCharacter } from 'src/app/state/selector/character-details.selector';
import { loadCharacter, loadingCharacter } from 'src/app/actions/character-details.action';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
 id: number;
 character$: Observable<Character>;

 constructor(
  private route: ActivatedRoute,
  private store: Store<AppState>,
  private router: Router,
 ){
  this.id = Infinity,
  this.character$ = this.store.select(selectCharacter);
}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.character$ = this.store.select(selectCharacter);
  
  this.store.dispatch(loadingCharacter({ id: this.id}));
}

 goBack(): void {
  this.router.navigate(['/']);
 }
}
