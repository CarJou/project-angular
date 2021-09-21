import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public client: Client = new Client();
  public title: string = 'Create client';

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  //llamo load dentro de ngoninit para que se monte cuando se cargue el componente
  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this.activateRouter.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clientService
          .getClient(id)
          .subscribe((client) => (this.client = client));
      }
    });
  }

  public create(): void {
    this.clientService.create(this.client).subscribe((client) => {
      this.router.navigate(['/clients']);
      swal.fire(
        'Save',
        `The client ${client.name} was successfully created`,
        'success'
      );
    });
  }

  update(): void {
    this.clientService.update(this.client).subscribe((client) => {
      this.router.navigate(['/clients']);
      swal.fire(
        'Edit',
        `The client ${client.name} was successfully edited`,
        'success'
      );
    });
  }
}
