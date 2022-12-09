import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Character } from "src/app/models/character.model";
import { selectCharacter } from "src/app/state/selector/character-details.selector";
import { loadingCharacter } from "src/app/state/actions/character-details.action";
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.css"],
})
export class CharacterDetailsComponent implements OnInit {
  id: number;
  character$: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    (this.id = 0), (this.character$ = new Observable<Character>());
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.character$ = this.store.select(selectCharacter);

    // this.character$.subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   }
    // })
    // this.character$.subscribe(
    //   (data) => {
    //     console.log(data)
    //   }
    // )`

    this.store.dispatch(loadingCharacter({ id: this.id }));
  }

  goBack(): void {
    this.router.navigate(["/"]);
  }
}
