import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Character } from "src/app/models/character.model";
import {
  loadCharacters,
  loadingCharacters,
} from "src/app/state/actions/characters.action";
import { AppState } from "src/app/state/app.state";
import { GetFilmsService } from "src/app/services/get-films.service";
import { ThisReceiver } from "@angular/compiler";
import {
  selectCharacters,
  selectLoading,
} from "src/app/state/selector/characters.selector";

@Component({
  selector: "app-home-page-component",
  templateUrl: "./home-page-component.component.html",
  styleUrls: ["./home-page-component.component.css"],
})
export class HomePageComponentComponent implements OnInit {
  loading$: Observable<boolean>;
  characters$: Observable<Character[]>;

  constructor(private store: Store<AppState>) {
    this.loading$ = new Observable<boolean>();
    this.characters$ = new Observable<Character[]>();
  }

  ngOnInit(): void {
    try {
      this.loading$ = this.store.select(selectLoading);
      this.characters$ = this.store.select(selectCharacters);

      this.store.dispatch(loadingCharacters());
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
}
