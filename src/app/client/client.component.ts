import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  clients?: Client[];

  constructor(private clientService: ClientService) {}

  //client observado, el observador se "suscribe" y actualiza el listado
  ngOnInit(): void {
    this.clientService
      .getClients()
      .subscribe((clients) => (this.clients = clients));
  }
}
