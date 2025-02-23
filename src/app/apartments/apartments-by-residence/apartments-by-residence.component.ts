import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApartmentServiceService } from 'src/app/apartment.service.service';
import { Apartment } from 'src/core/models/apartment.model';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {

  residanceID!: number;
    private routeSub!: Subscription;

    listAppByRes! : Apartment[];
  constructor(private route: ActivatedRoute , private service: ApartmentServiceService){}

  ngOnInit() {

    this.routeSub = this.route.paramMap.subscribe(params => {
      let id = +params.get('id')!;
      this.residanceID=id;
    });


    this.service.getAppartmentsByResId(this.residanceID).subscribe(apps => this.listAppByRes = apps);
  
}


}
