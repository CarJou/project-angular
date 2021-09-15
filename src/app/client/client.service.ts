import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Client } from './client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}
  //convierte el flujo observable a partir del object client
  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
