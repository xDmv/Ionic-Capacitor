import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

  items = [
    {
      "name" : "Americano+",
      "price" : 4.25
    },
    {
      "name" : "Cappuchino",
      "price" : 6.25
    },
    {
      "name" : "Americano2",
      "price" : 4.25
    },
    {
      "name" : "Flat White",
      "price" : 9.50
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
