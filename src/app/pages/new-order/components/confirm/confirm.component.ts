import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

  order_items = [
    { 
      "name": "Americano+",
      "price": 4.25,
      "items": 3 
    },
    { 
      "name": "Cappuchino",
      "price": 6.25,
      "items": 2 
    }
  ]

  constructor() { }

  ngOnInit() {}

}
