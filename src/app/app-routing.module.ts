import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { ViewPlacesComponent } from './components/view-places/view-places.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addPlace', component: AddPlaceComponent },
  { path: 'viewPlaces', component: ViewPlacesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'addPlace', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
