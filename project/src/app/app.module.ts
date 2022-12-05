import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponentComponent,
    LandingComponent,
    CharacterDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CharactersEffects,CharacterDetailsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
