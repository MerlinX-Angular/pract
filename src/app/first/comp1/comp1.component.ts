import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  oneAppleCountTime: number = 0;
  givenTime: number = 0;
  userInput = new FormGroup({
    oneAppleCountTime: new FormControl(0, [Validators.required, Validators.min(0)]),
    givenTime: new FormControl(0, [Validators.required, Validators.min(0)]),
  })

  constructor() { }

  get formValuesForValidation() {
    return this.userInput.controls
  }

  taskResult() {
    if (isNaN(this.userInput.value.givenTime / this.userInput.value.oneAppleCountTime)) {
      return 0;
    }
    if (this.userInput.value.givenTime < 0 && this.userInput.value.oneAppleCountTime < 0) {
      return -1;
    }
    return this.userInput.value.givenTime / this.userInput.value.oneAppleCountTime;
  }

  ngOnInit(): void {
  }


}
