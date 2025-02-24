import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence.model';
import { ResidenceService } from '../../core/models/Services/residence.service';
import { CommonServiceService } from 'src/core/models/Services/common-service.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})

export class ResidencesComponent {

  searchAddress: string = '';
  favorites: Residence[] = [];
  addressCount: number = 0;

      constructor(private residenceService : ResidenceService ,private commonSrv : CommonServiceService) {}
  
  //listResidences: Residence[] = this.residenceService.listResidences;
  listResidences!: Residence[];

  

  ngOnInit() {
    this.residenceService.getResidencesHttp().subscribe(
      (data) =>{
        this.listResidences=data;
      }

    )
    const addressToCheck = 'Ezzahra';
    this.addressCount = this.commonSrv.getSameValueOf(this.listResidences, 'address', addressToCheck);
    console.log(`Nombre de résidences avec l'adresse "${addressToCheck}" :`, this.addressCount);
  }

  deleteResidence(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette résidence ?')) {
      this.residenceService.deleteResidenceHttp(id).subscribe(
        () => {
          console.log(`Résidence ${id} supprimée avec succès`);
          this.listResidences = this.listResidences.filter(res => res.id !== id);
        }
      );
    }
  }
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
