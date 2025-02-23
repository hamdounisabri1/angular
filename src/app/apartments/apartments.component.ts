import { Component } from '@angular/core';
import { Apartment } from 'src/core/models/apartment.model';
import { ApartmentServiceService } from '../apartment.service.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  constructor(private servie :ApartmentServiceService){}
  listApartments :Apartment[] = this.servie.listApartments;


}
