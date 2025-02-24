import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/core/models/Services/residence.service';
import { Residence } from 'src/core/models/residence.model';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  ResForm!: FormGroup;

 
    constructor(private residenceService : ResidenceService,private route: ActivatedRoute,private router: Router) {

      this.ResForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        image: new FormControl('assets/elFel.jpg',[Validators.required]), 
        status: new FormControl('',),
      });

    }


    onSubmit() : void{
        
          const formValues = this.ResForm.value;
      
          const newApartment: Residence = {
            id: Number(formValues.id),
            name: (formValues.name),
            address: (formValues.address),
            image: formValues.image ,
            status: formValues.status,
          };
           
          this.residenceService.addResidenceHttp(newApartment);
    }
  






}
