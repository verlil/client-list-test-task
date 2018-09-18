import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientItemComponent } from './clients/clients-list/client-item/client-item.component';
import {ClientService} from './clients/shared/client.service';
import {DataStorageService} from './clients/shared/data-storage.service';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    ClientItemComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ClientService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
