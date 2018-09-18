import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientsComponent} from './clients.component';
import {ClientsStartComponent} from './clients-start/clients-start.component';
import {ClientDetailsComponent} from './client-details/client-details.component';

const clientsRoutes: Routes = [
  {
    path: '', component: ClientsComponent, children: [
      {path: '', component: ClientsStartComponent},
      {path: ':id', component: ClientDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(clientsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientsRoutingModule {

}
