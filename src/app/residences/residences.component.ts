import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence.model';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})

export class ResidencesComponent {

  searchAddress: string = '';
  favorites: Residence[] = [];
      constructor(private residenceService : ResidenceService) {}
  
  listResidences: Residence[] = this.residenceService.listResidences;
  

  showLocation(residence: Residence) {
    if (residence.address === 'inconnu') {
      alert('L\'adresse de cette résidence est inconnue');
    } else {
      alert(residence.address);
    }
  }

  likeResidence(residence: Residence) {
    this.favorites.push(residence);
    console.log(this.favorites)
  }
}
