import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './second/report/report.component';
import { MainComponent } from './second/main/main.component';
import { DataResolver } from './second/data.resolver';
import { Comp1Component } from './first/comp1/comp1.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"first", component:Comp1Component},
  {path:"city/:cityName", component:ReportComponent, resolve:{
    city:DataResolver
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
