import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardCompenent {
  Property: any = {

    id: 101,
    Name: 'Birla House',
    Type: 'House',
    Price: 12000,
  };
}
