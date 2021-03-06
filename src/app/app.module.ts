import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { MaterialModule } from '../core/common/material-components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , MaterialModule
    , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
