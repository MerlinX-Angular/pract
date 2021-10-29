import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToTime'
})
export class UnixToTimePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let hours = new Date(value).getHours();
    let minutes = new Date(value).getMinutes();
    if(minutes < 10) {
      return `${hours}:0${minutes}`
    }
    return `${hours}:${minutes}`
  }

}
