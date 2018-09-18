import {Component, OnInit} from '@angular/core';
import {Client} from '../shared/client.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ClientService} from '../shared/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  client: Client;
  id: number;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.client = this.clientService.getClient(this.id);
        }
      );
  }


}
