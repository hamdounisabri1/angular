import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Apartment } from 'src/core/models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentServiceService {
  

   listApartments: Apartment[] = [ 
     {apartNum :1,category:"S+1" ,floorNum: 1,ResidenceId : 1 , surface : 250 ,terrace : true , surfaceterrace :50},
     {apartNum :2,category:"S+3" ,floorNum: 2,ResidenceId : 2 , surface : 100 ,terrace : false , surfaceterrace :0},
     {apartNum :3,category:"S+2" ,floorNum: 1,ResidenceId : 2 , surface : 300 ,terrace : true , surfaceterrace :20},
     {apartNum :4,category:"S+2" ,floorNum: 2,ResidenceId : 3 , surface : 250 ,terrace : false , surfaceterrace :0}

    ];
   addApartment(apartment: Apartment): void {
    this.listApartments.push(apartment);
  }

      updateApartment(apartment: Apartment): void {
        const index = this.listApartments.findIndex(r => r.apartNum === apartment.apartNum);
        if (index !== -1) {
          this.listApartments[index] = apartment;
        }
      }

        getApartments(): Observable<Apartment[]> {
          return of(this.listApartments);
        }
        
        getApartByApartNum(apartNum: number): Observable<Apartment> {
          const apartment = this.listApartments.find(res => res.apartNum === apartNum);
          return apartment ? of(apartment) : throwError(() => new Error('apartment not found'));
        }



        getAppartmentsByResId(resID: number): Observable<Apartment[]> {
          const filteredApartments = this.listApartments.filter((app: Apartment) => app.ResidenceId === resID);
        
          return of(filteredApartments);
        }
        

  constructor() { }
}
