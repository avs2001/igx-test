import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IgxComboComponent, IgxComboModule} from "igniteui-angular";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'int-custom-combo',
  standalone: true,
  imports: [CommonModule, IgxComboModule, ReactiveFormsModule],
  templateUrl: './custom-combo.component.html',
  styleUrls: ['./custom-combo.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: CustomComboComponent}
  ]
})
export class CustomComboComponent implements ControlValueAccessor, OnInit {
  @Input()
  data!: any[];
  @Input()
  displayKey!: string;
  @ViewChild('combo', {static: true}) combo!: IgxComboComponent;

  control = new FormControl([]);

  onChange = (_: any) => {
  };

  onTouched = (_: any) => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      console.log(obj);
      // const i = this.data.find(d => d.id === obj.id);
      // this.control.setValue([i as never])
    }
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(v => this.onChange(null));
  }
}
