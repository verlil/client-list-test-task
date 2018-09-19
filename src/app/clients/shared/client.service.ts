import {Client} from './client.model';
import {Subject} from 'rxjs';


export class ClientService {
  private clients: Client[] = [];
  private loadedClients: Client[] = [];
  clientsChanged = new Subject<Client[]>();
  loadedClientsChanged = new Subject<Client[]>();

  loadClients(clients: Client[]) {
    this.clients = clients;
    this.loadedClients = clients;
    this.clientsChanged.next(this.clients.slice());
    this.loadedClientsChanged.next(this.loadedClients.slice());
  }

  setClients(clients: Client[]) {
    this.clients = clients;
    this.clientsChanged.next(this.clients.slice());
  }

  getClients() {
    return this.loadedClients.slice();
  }

  getLoadedClients() {
    return this.clients.slice();
  }

  getClient(index: number) {
    return this.clients[index];
  }
}
