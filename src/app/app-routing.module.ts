import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { UpdateResidenceComponent } from './residences/update-residence/update-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence-details/:id', component: ResidenceDetailsComponent},
  { path: 'residenceAdd', component: AddResidenceComponent},
  { path: 'residenceUpdate', component: UpdateResidenceComponent},
  { path: 'apartments', component: ApartmentsComponent},
  { path: 'apartmentsByresidence', component: ApartmentsByResidenceComponent},
  { path: 'addApartment', component: AddApartmentComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  { path: '**', component: NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

