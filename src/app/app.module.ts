import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ClientService} from './clients/shared/client.service';
import {DataStorageService} from './clients/shared/data-storage.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClientService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
