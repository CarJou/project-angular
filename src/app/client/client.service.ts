import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//inyectamos la dependencia via constructor y la avariable queda definida en una variable como clase
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private urlEndpoint: string = 'http://localhost:8080/api/clients';
  constructor(private http: HttpClient) {}
  //convierte el flujo observable a partir del object client
  getClients(): Observable<Client[]> {
    return this.http
      .get(this.urlEndpoint)
      .pipe(map((response) => response as Client[]));
  }
}
