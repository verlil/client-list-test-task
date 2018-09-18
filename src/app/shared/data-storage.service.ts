import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ClientService} from './client.service';
import {Client} from './client.model';

@Injectable()

export class DataStorageService {

  constructor(private http: HttpClient,
              private clientService: ClientService) {
  }

  fetchClients() {
    this.http.get<Client[]>('http://localhost:4200/assets/clients.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(data => {
        const clients: Client[] = Object.values(data);
        return clients.map(function (client: any) {
          return new Client(
            client['general']['firstName'],
            client['general']['lastName'],
            client['general']['avatar'],
            client['job']['company'],
            client['job']['title'],
            client['contact']['email'],
            client['contact']['phone'],
            client['address']['street'],
            client['address']['city'],
            client['address']['zipCode'],
            client['address']['country'],
            );
        });
      })).subscribe(data => {
      this.clientService.setClients(Object.values(data));
    });
  }
}
