import { Component, OnInit } from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private database: DataStorageService) { }

  ngOnInit() {
    this.database.fetchClients();
  }

}
