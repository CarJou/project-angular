import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

//inyectamos la dependencia via constructor y la avariable queda definida en una variable como clase
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private urlEndpoint: string = 'http://localhost:8080/api/clients';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}
  //convierte el flujo observable a partir del object client
  getClients(): Observable<Client[]> {
    return this.http
      .get(this.urlEndpoint)
      .pipe(map((response) => response as Client[]));
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndpoint, client, {
      headers: this.httpHeaders,
    });
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndpoint}/${id}`);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndpoint}/${client.id}`, client, {
      headers: this.httpHeaders,
    });
  }

  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndpoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
