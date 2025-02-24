import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }


  getSameValueOf(list: any[], criteria: string, value: any): number {
    return list.filter(item => item[criteria] === value).length;
  }
}
