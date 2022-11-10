import {Component, inject} from '@angular/core';
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";


export const TypeMap = new Map([
  ['String', 'string'],
  ['Boolean', 'boolean'],
  ['Long', 'number'],
  ['Double', 'number'],
  ['Date', 'date'],
  ['ENUM', null],
  ['ENUM_SHORT', null],
  ['TYPEAHEAD', 'string'],
]);

export const ModelType = new Map([
  ['String', 'string'],
  ['Boolean', 'boolean'],
  ['Long', 'number'],
  ['Double', 'number'],
  ['Date', 'Date'],
  ['ENUM', 'BaseMasterListItem'],
  ['ENUM_SHORT', 'BaseMasterListItem'],
  ['TYPEAHEAD', 'string'],
]);

@Component({
  selector: 'int-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  get metadata() {
    return this.http.get<{ metadata: any[] }>(`/assets/us-planner-metadata.json`).pipe(
      map(({metadata}) => metadata)
    );
  }

  getType(type: string) {
    const t = TypeMap.get(type.trim());
    return t ? `dataType="${t}"` : ``
  }

  getEditable(displayOnly: boolean) {
    return displayOnly ? `[editable]="false"` : ``;
  }

  getModelType(type: string) {
    const t = ModelType.get(type.trim());
    console.log(t, type);
    return `Nullable<${t}>`;
  }

  fields$ = this.metadata.pipe(
    map((meta) => meta.map(m => {
      return `<igx-column header="${m.name}" field="${m.code}" ${this.getType(m.type)} ${this.getEditable(m.displayOnly)}></igx-column>`
    }).join('\n'))
  );

  /*
  {
      "code": "cancelLaunch",
      "name": "CANCEL LAUNCH",
      "type": "Boolean",
      "masterListId": null,
      "optional": true,
      "searchable": false,
      "calculated": false,
      "displayOnly": false
  }
*/
  model$ = this.metadata.pipe(
    map((meta) => {
      return meta.map(m => `${m.code}:${this.getModelType(m.type)};`).join('\n');
    })
  );

}
