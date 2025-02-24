import { Component } from '@angular/core';
import { Apartment } from 'src/core/models/apartment.model';
import { ApartmentServiceService } from '../../core/models/Services/apartment.service.service';
import { CommonServiceService } from 'src/core/models/Services/common-service.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  constructor(private servie :ApartmentServiceService , private commonSrv : CommonServiceService){}
  listApartments :Apartment[] = this.servie.listApartments;
  surfaceCount: number = 0;

   
  ngOnInit() {
    const surfaceToCheck = 250;
    this.surfaceCount = this.commonSrv.getSameValueOf(this.listApartments, 'surface', surfaceToCheck);
    console.log(`Nombre d'appartements avec une surface de ${surfaceToCheck}m² :`, this.surfaceCount);
  }
  
}
