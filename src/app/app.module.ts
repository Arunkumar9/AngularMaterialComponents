import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';

import {MdButtonModule,MdButtonToggleModule,MdMenuModule,MdIconModule, MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
