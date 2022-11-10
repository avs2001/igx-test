import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxInputDirective,
  IgxInputGroupModule,
  IgxToggleDirective,
  IgxToggleModule,
  OverlaySettings,
  VerticalAlignment
} from "igniteui-angular";
import {FormControl, ReactiveFormsModule, UntypedFormArray} from "@angular/forms";


@Component({
  selector: 'int-lift-week',
  standalone: true,
  imports: [CommonModule, IgxInputGroupModule, IgxToggleModule, ReactiveFormsModule],
  templateUrl: './lift-week.component.html',
  styleUrls: ['./lift-week.component.scss']
})
export class LiftWeekComponent implements OnInit {
  @ViewChild(IgxToggleDirective) toggle!: IgxToggleDirective;
  @ViewChild('input') input!: IgxInputDirective;
  control = new FormControl<number | null>(null, {nonNullable: false});
  private formArray = new UntypedFormArray([]);



  constructor() {
  }

  get controls() {
    return this.formArray.controls as FormControl[];
  }

  createControls(nrOfControls: number): void {
    this.removeControls();
    Array.from({length: nrOfControls}).map(() => new FormControl(null)).forEach(control => this.formArray.push(control))
  }

  removeControls() {
    this.formArray.controls = [];
    this.formArray.reset([]);
  }


  ngOnInit(): void {
    /*{
        "code": "cancelLaunch",
        "name": "CANCEL LAUNCH",
        "type": "Boolean",
        "masterListId": null,
        "optional": true,
        "searchable": false,
        "calculated": false,
        "displayOnly": false
    }*/


  }

  private _overlaySettings: OverlaySettings = {
    closeOnOutsideClick: false,
    modal: false,
    closeOnEscape: true,
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalStartPoint: HorizontalAlignment.Left,
      verticalStartPoint: VerticalAlignment.Bottom,
    }),
  };

}
