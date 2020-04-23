import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

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

  ngOnInit() {}

}
