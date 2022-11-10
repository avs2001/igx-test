import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[intColumnValidator]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: ColumnValidatorDirective
  }]
})
export class ColumnValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.parent) {
      const thisControl = Object.entries(control.parent?.controls).find(([name, c]) => c === control);
      if (thisControl && control.parent.errors) {
        const [name, c] = thisControl;

        return control.parent.errors[name];
      }

    }
    return null;
  }


  registerOnValidatorChange(fn: () => void): void {
    console.log('CHANGE');
  }


}
