import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'characters',
    component: HomePageComponentComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
