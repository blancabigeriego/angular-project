import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { LandingComponent } from './components/landing/landing.component';
import { PlaypageComponent } from './components/playpage/playpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'characters',
    component: HomePageComponentComponent,
  },
  {
    path: 'play',
    component: PlaypageComponent
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
