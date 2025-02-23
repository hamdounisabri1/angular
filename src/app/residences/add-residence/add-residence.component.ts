import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/residence.service';
import { Residence } from 'src/core/models/residence.model';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

 
    constructor(private residenceService : ResidenceService,private route: ActivatedRoute,private router: Router) {}
  






}
