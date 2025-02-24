import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResidenceService } from 'src/core/models/Services/residence.service';
import { Residence } from 'src/core/models/residence.model';



@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  residenceSelected!: Residence;
  residenceId!: number;
  residences!: Residence[];
  private routeSub!: Subscription;
  constructor(private residenceService : ResidenceService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.residenceService.getResidences().subscribe(residences => this.residences = residences);

    this.routeSub = this.route.paramMap.subscribe(params => {
      let id = +params.get('id')!;
      this.residenceId = id - 1;
      this.residenceSelected = this.residences[this.residenceId];
    });
     
}

nextRes(){
  const nextResID = this.residenceId + 1;
    if (nextResID < this.residences.length) {
    this.router.navigate(['/residence-details', this.residences[nextResID].id]);
  } else {
    this.router.navigate(['/residence-details', 1]);
  } 
}

}
