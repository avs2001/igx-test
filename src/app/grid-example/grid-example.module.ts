import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridExampleComponent } from './grid-example/grid-example.component';
import {IgxActionStripModule, IgxGridModule, IgxSimpleComboModule} from "igniteui-angular";



@NgModule({
  declarations: [
    GridExampleComponent
  ],
  imports: [
    CommonModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxSimpleComboModule
  ],
  exports: [
    GridExampleComponent
  ]
})
export class GridExampleModule { }
