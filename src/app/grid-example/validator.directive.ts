import {Directive, Host, OnInit} from '@angular/core';
import {IgxGridComponent} from "igniteui-angular";
import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Directive({
  selector: '[intValidator]',
  standalone: true
})
export class ValidatorDirective implements OnInit {

  constructor(
    @Host() private readonly grid: IgxGridComponent,
  ) {
  }

  private getValidator(data: any): ValidatorFn | ValidatorFn[] {
    return control => {
      return Validators.required(control)
    }
  }

  rowValidator(): ValidatorFn {
    return (_form: AbstractControl): ValidationErrors => {
      const formGroup = _form as FormGroup;
      return Object.entries(formGroup.controls).reduce((acc, [controlName, control]) => {
        const fieldName = controlName as string;
        acc[fieldName] = Validators.required(control);
        return acc;
      }, {} as any);
    };
  }

  ngOnInit(): void {
    this.grid.validationTrigger = 'blur';
    this.grid.formGroupCreated.subscribe(({formGroup}) => {
      formGroup.addValidators(this.rowValidator());
    });

    this.grid.cellEditExit.subscribe(({owner, rowID}) => {
      if (owner) {
        const formGroup = owner.validation.getFormGroup(rowID);
        console.log(formGroup.errors);
      }
    })

  }


}
