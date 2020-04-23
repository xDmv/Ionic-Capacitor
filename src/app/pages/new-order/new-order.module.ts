import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOrderPageRoutingModule } from './new-order-routing.module';

import { NewOrderPage } from './new-order.page';
import { OrderComponent } from './components/order/order.component';
import { MapComponent } from './components/map/map.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOrderPageRoutingModule
  ],
  declarations: [NewOrderPage, OrderComponent, MapComponent, ConfirmComponent]
})
export class NewOrderPageModule {}
