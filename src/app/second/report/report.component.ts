import { Component, OnInit, AfterViewInit, ViewChildren, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { IconKey, Skycons } from 'skycons-ts';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { List } from '../interfaces/data.interfaces';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('weatherTypes') wTypes: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private cd: ChangeDetectorRef) { }
  activatedRouteSubscription!: Subscription;
  city: string = "";
  skycons = new Skycons({ 'color': 'black' });
  allDays!: List[];
  todayOnly!: List;
  getWeekWeatherTypes: Array<string> = [];

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(allDays => {
      this.city = allDays?.city?.city?.name;
      this.allDays = allDays?.city?.list;
      this.todayOnly = allDays?.city?.list[0];
      //        setTimeout(() => {
      //          for (let i = 0; i < allDays?.city?.list.length; i++) {
      //           this.getWeekWeatherTypes.push(allDays?.city?.list[i]?.weather[0]?.main)
      //             this.changeIconName(allDays?.city?.list[i]?.weather[0]?.main, i)!
      //          }
      //       }, 1);
      this.skycons.play();
    })
  }


  ngAfterViewInit() {
    for (let i = 0; i < this.wTypes.length; i++) {
      this.getWeekWeatherTypes.push(this.wTypes._results[i].nativeElement.innerText)
      this.changeIconName(this.wTypes._results[i].nativeElement.innerText, i)!
    }
    this.cd.detectChanges();
  }


  changeIconName(value: string, position: number) {
    switch (value) {
      case "Clear":
        this.skycons.add('icon' + position, "clear-day");
        break;
      case "Clouds":
        this.skycons.add('icon' + position, "cloudy");
        break;
      case "Rain":
        this.skycons.add('icon' + position, "rain");
        break;
      case "Snow":
        this.skycons.add('icon' + position, "snow");
        break;
    }
  }
  
  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
  }


}
