import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { LandingComponent } from './components/landing/landing.component';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './state/effects/characters.effect';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterDetailsEffect } from './state/effects/character-details.effect';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaypageComponent } from './components/playpage/playpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { EditCharacterEffects } from './state/effects/edit-character.effect';
import { CreateCharacterEffects } from './state/effects/create-character.effect';
import { deleteCharacterEffect } from './state/effects/delete-character.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    LandingComponent,
    CharacterDetailsComponent,
    NavbarComponent,
    PlaypageComponent,
    EditCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CharactersEffects,CharacterDetailsEffect,CreateCharacterEffects, EditCharacterEffects, deleteCharacterEffect ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
