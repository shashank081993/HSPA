import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAppProperties(): Observable<IProperty[]> {
    return this.http.get('Data/properties.json').pipe(
      map(data => {
        const jsonData= JSON.stringify(data)
        const propertyArray: Array<IProperty> = JSON.parse(jsonData);;
        return propertyArray;
      })
    );
  }
}
