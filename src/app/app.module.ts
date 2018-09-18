import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientItemComponent } from './clients-list/client-item/client-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    ClientItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
