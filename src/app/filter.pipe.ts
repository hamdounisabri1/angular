import { Pipe, PipeTransform } from '@angular/core';
import { Residence } from '../core/models/residence.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(residences: Residence[], searchAddress: string): Residence[] {
    if (!searchAddress) {
      return residences;
    }
    return residences.filter(residence => residence.address.toLowerCase().includes(searchAddress.toLowerCase()));
  }
}