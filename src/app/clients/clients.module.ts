import {NgModule} from '@angular/core';
import {ClientsStartComponent} from './clients-start/clients-start.component';
import {ClientsComponent} from './clients.component';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {ClientItemComponent} from './clients-list/client-item/client-item.component';
import {ClientsRoutingModule} from './clients-routing.module';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsStartComponent,
    ClientsListComponent,
    ClientDetailsComponent,
    ClientItemComponent
  ],
  imports: [
    ClientsRoutingModule,
    CommonModule]
})

export class ClientsModule {

}
