import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApartmentServiceService } from 'src/core/models/Services/apartment.service.service';
import { Apartment } from 'src/core/models/apartment.model';
import { Residence } from 'src/core/models/residence.model';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;


  constructor( private service : ApartmentServiceService) {
    this.apartForm = new FormGroup({
      appNumber: new FormControl('', [Validators.required]),
      floorNumber: new FormControl('', [Validators.required]),
      surface: new FormControl('', [Validators.required]),
      TerraceCheck: new FormControl('no',[Validators.required]), 
      TerraceSurface: new FormControl('',),
      Category: new FormControl('S+1',[Validators.required]) ,
      Residence: new FormControl('',[Validators.required]) 

    });
  }

  onsubmuti(){
    
    const formValues = this.apartForm.value;

    const newApartment: Apartment = {
      apartNum: Number(formValues.appNumber),
      floorNum: Number(formValues.floorNumber),
      surface: Number(formValues.surface),
      terrace: formValues.TerraceCheck === 'yes', // Convert 'yes'/'no' to boolean
      surfaceterrace: formValues.TerraceCheck === 'yes' ? Number(formValues.TerraceSurface) : 0, 
      category: formValues.Category,
      ResidenceId: Number(formValues.Residence)
    };
     
    this.service.addApartment(newApartment);
  }
  }

