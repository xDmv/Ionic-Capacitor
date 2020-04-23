import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOrderMapPage } from './new-order-map.page';

const routes: Routes = [
  {
    path: '',
    component: NewOrderMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOrderMapPageRoutingModule {}
