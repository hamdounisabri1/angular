import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Residence } from 'src/core/models/residence.model';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: 'assets/elFel.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: 'assets/elYassmine.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: 'assets/elFel.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: 'assets/elYassmine.jpg', status: 'En Construction' }
  ];

   residenceUrl ='http://localhost:3000/residences'

   getResidencesHttp(): Observable<any[]> {
    return this.http.get<any[]>(this.residenceUrl);
  }

  deleteResidenceHttp(id: number): Observable<void> {
    return this.http.delete<void>(`${this.residenceUrl}/${id}`);
  }

  addResidenceHttp(residence: any): Observable<any> {
    return this.http.post<any>(this.residenceUrl, residence);
  }
  updateResidenceHttp(residence: Residence): Observable<Residence> {
    const url = `${this.residenceUrl}/${residence.id}`; // URL avec l'ID de la résidence à mettre à jour
    return this.http.put<Residence>(url, residence);
  }


  /////////////before services//////////////////
  addResidence(residence: Residence): void {
    this.listResidences.push(residence);
  }

  updateResidence(residence: Residence): void {
    const index = this.listResidences.findIndex(r => r.id === residence.id);
    if (index !== -1) {
      this.listResidences[index] = residence;
    }
  }
  
  getResidences(): Observable<Residence[]> {
    return of(this.listResidences);
  }
  
  getResById(id: number): Observable<Residence> {
    const residence = this.listResidences.find(res => res.id === id);
    return residence ? of(residence) : throwError(() => new Error('Residence not found'));
  }

}
