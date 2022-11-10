import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridExampleComponent } from './grid-example/grid-example.component';
import {IgxActionStripModule, IgxGridModule, IgxSimpleComboModule} from "igniteui-angular";
import {NewRowDirective} from "../new-row.directive";
import {ValidatorDirective} from "./validator.directive";
import {ReactiveFormsModule} from "@angular/forms";
import {ColumnValidatorDirective} from "./column-validator.directive";
import {ComboCustomControlDirective} from "./combo-custom-control.directive";
import {CustomComboComponent} from "./custom-combo/custom-combo.component";



@NgModule({
  declarations: [
    GridExampleComponent
  ],
  imports: [
    CommonModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxSimpleComboModule,
    NewRowDirective,
    ValidatorDirective,
    ReactiveFormsModule,
    ColumnValidatorDirective,
    ComboCustomControlDirective,
    CustomComboComponent
  ],
  exports: [
    GridExampleComponent
  ]
})
export class GridExampleModule { }
