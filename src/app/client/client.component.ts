import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
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

  delete(client: Client): void {
    swal
      .fire({
        title: 'Are you sure?',
        text: `Do you want to remove the client ${client.name} ${client.surname}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.clientService.delete(client.id).subscribe((response) => {
            this.clients = this.clients?.filter((cli) => cli !== client);
            swal.fire(
              'Deleted!',
              `Client ${client.name} has been deleted.`,
              'success'
            );
          });
        }
      });
  }
}
