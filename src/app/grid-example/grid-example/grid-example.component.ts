import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IgxGridComponent} from "igniteui-angular";

export interface Address {
  city: string;
  zipcode: string;
}

export interface User {
  name: string;
  username: string;
  email: string;
  address: Address;
}

@Component({
  selector: 'int-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.scss']
})
export class GridExampleComponent {
  private readonly http = inject(HttpClient);
  @ViewChild('exampleGrid') grid!: IgxGridComponent;
  gridData$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  addresses:Address[] = [
    {city:'San Francisco', zipcode:'001'},
    {city:'New York', zipcode:'002'},
    {city:'Boston', zipcode:'003'},
  ];
  addressFormatter = (data: any) => {
    return data ? data.city : '';
  };


  newRow() {
    this.grid.beginAddRowById(null);
  }


}
