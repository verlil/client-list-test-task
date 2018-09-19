import {NgModule} from '@angular/core';
import {ClientsStartComponent} from './clients-start/clients-start.component';
import {ClientsComponent} from './clients.component';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {ClientItemComponent} from './clients-list/client-item/client-item.component';
import {ClientsRoutingModule} from './clients-routing.module';
import {ClientDetailsComponent} from './client-details/client-details.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsStartComponent,
    ClientsListComponent,
    ClientDetailsComponent,
    ClientItemComponent,
    ClientSearchComponent
  ],
  imports: [
    ClientsRoutingModule,
    CommonModule,
    FormsModule
  ]
})

export class ClientsModule {

}
