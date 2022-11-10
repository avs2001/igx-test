import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CellType, IgxGridComponent} from "igniteui-angular";
import {filter, map, merge} from "rxjs";
import {FormControl} from "@angular/forms";

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
export class GridExampleComponent implements OnInit {
  private readonly http = inject(HttpClient);
  @ViewChild('exampleGrid', {static: true}) grid!: IgxGridComponent;
  gridData$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  addresses: Address[] = [
    {city: 'San Francisco', zipcode: '001'},
    {city: 'New York', zipcode: '002'},
    {city: 'Boston', zipcode: '003'},
  ];
  addressFormatter = (data: any) => {
    return data ? data.city : '';
  };
  items: any[] = [
    {id: 1, name: 'unu'},
    {id: 2, name: 'doi'},
  ];

  control = new FormControl({id: 2, name: 'doi'});


  newRow() {
    this.grid.beginAddRowById(null);
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(console.log);
  }


  test(cell: CellType) {
    console.log(cell.grid.validation.getFormGroup(cell.row.key));
  }
}
