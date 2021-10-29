import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './first/comp1/comp1.component';
import { Comp2Component } from './first/comp2/comp2.component';
import { MainComponent } from './second/main/main.component';
import { ReportComponent } from './second/report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UnixToTimePipe } from './unix-to-time.pipe';
import { RoundNumberPipe } from './round-number.pipe';




@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    MainComponent,
    ReportComponent,
    UnixToTimePipe,
    RoundNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
