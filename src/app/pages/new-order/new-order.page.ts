import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

  steps: string;

  constructor() { }

  ngOnInit() {
    this.steps = "step3"
  }

  onNextStep(){
    console.log('step::', this.steps);
    if(this.steps === "step2"){
      this.steps = "step3";
    }
    if(this.steps === "step1"){
      this.steps = "step2";
    }
    console.log('step==', this.steps);
  }

}
