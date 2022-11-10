import {Directive, Host, OnInit} from '@angular/core';
import {IgxGridComponent} from "igniteui-angular";
import {map, switchMap, tap} from "rxjs";

@Directive({
  selector: '[intNewRow]',
  exportAs: 'intNewRow',
  standalone: true
})
export class NewRowDirective implements OnInit {

  constructor(@Host() private readonly grid: IgxGridComponent) {
  }

  newRow() {
    const tempId = Math.random().toString(36).slice(2);
    this.grid.addRow({id: tempId});
    this.grid.pinRow(tempId);
    const row = this.grid.getRowByKey(tempId);
    if (row) {
      const firstCell = row.cells?.find(cell => cell.editable);
      if (firstCell) {
        firstCell.editMode = true;
      }
    }
  }

  ngOnInit(): void {
    this.grid.rowEditDone.pipe(
      switchMap((e) => this.grid.rowEditingOverlay.closed.pipe(map(() => e))),
      tap(({rowID}) => {
        this.grid.unpinRow(rowID);
        // this.grid.showSnackbarFor(this.grid.getRowByKey(rowID).index);
      })
    ).subscribe();

  }


}
