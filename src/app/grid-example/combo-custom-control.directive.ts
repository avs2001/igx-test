import {Directive, Host, OnInit, Self} from '@angular/core';
import {IComboSelectionChangingEventArgs, IgxComboComponent} from "igniteui-angular";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: '[intComboCustomControl]',
  standalone: true,
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: ComboCustomControlDirective}
  ]
})
export class ComboCustomControlDirective implements ControlValueAccessor, OnInit {
  onChange = (_: any) => {
  };

  onTouched = (_: any) => {
  };

  constructor(@Self() private readonly _combo: IgxComboComponent) {

  }

  ngOnInit(): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }


}
