import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {
  city:any;
  constructor(private apiService:ApiService,private activatedRoute:ActivatedRoute){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.apiService.getCityWeather(route?.params?.cityName,8)
  }
}
