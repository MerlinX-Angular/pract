import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
 @Input() result = 0;
 @Input() givenTime = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
