import {Client} from './client.model';
import {Subject} from 'rxjs';


export class ClientService {
  private clients: Client[] = [];
  clientsChanged = new Subject<Client[]>();

  setClients(clients: Client[]) {
    this.clients = clients;
    this.clientsChanged.next(this.clients.slice());
  }

  getClients() {
    return this.clients.slice();
  }
}
