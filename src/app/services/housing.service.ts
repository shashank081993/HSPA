import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAppProperties() {
    return this.http.get('Data/properties.json').pipe(
      map((data) => {
        const propertyArray: Array<any> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
           propertyArray.push([id]);
          }
        }
        return propertyArray;
      })
    );
  }
}
