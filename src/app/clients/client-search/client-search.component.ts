import {Component, OnDestroy, OnInit} from '@angular/core';
import {Client} from '../shared/client.model';
import {ClientService} from '../shared/client.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  loadedClients: Client[];
  searchedClients: Client[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.subscription = this.clientService.loadedClientsChanged
      .subscribe(
        (clients: Client[]) => {
          this.loadedClients = clients;
        }
      );
    this.loadedClients = this.clientService.getLoadedClients();
    console.log(this.loadedClients);
  }


  onSearchChange(searchValue: string) {
    searchValue = searchValue.toLowerCase();

    this.searchedClients = this.loadedClients.filter(client => {
      return client.generalFirstName.toLowerCase().includes(searchValue) ||
        client.generalLastName.toLowerCase().includes(searchValue);
    });

    this.clientService.setClients(this.searchedClients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
