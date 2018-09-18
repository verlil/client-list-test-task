import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientItemComponent } from './clients-list/client-item/client-item.component';
import {ClientService} from './shared/client.service';
import {DataStorageService} from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    ClientItemComponent
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
