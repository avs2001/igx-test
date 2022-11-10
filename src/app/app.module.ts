import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GridExampleModule} from "./grid-example/grid-example.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LiftWeekComponent} from "./lift-week/lift-week.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        GridExampleModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LiftWeekComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
