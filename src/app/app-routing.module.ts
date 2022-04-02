import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detail } from './components/body/detail/detail.component';

import { Menu } from './components/body/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: Menu,
  },
  {
    path: 'detail/:id',
    component: Detail
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
