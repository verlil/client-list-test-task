import {Component, OnDestroy, OnInit} from '@angular/core';
import {Client} from '../shared/client.model';
import {ClientService} from '../shared/client.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit, OnDestroy {
  clients: Client[];
  subscription: Subscription;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.subscription = this.clientService.clientsChanged
      .subscribe(
        (clients: Client[]) => {
          this.clients = clients;
        }
      );
    this.clients = this.clientService.getClients();


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
