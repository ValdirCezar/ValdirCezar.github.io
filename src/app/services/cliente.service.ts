import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Cliente[]> {
    const url = this.baseUrl + "/clientes";
    return this.http.get<Cliente[]>(url);
  }

  findById(id : any):Observable<Cliente> {
    const url = this.baseUrl + "/clientes/" + id;
    return this.http.get<Cliente>(url);
  }

  create(cliente: Cliente): Observable<Cliente> {
    const url = this.baseUrl + "/clientes";
    return this.http.post<Cliente>(url, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = this.baseUrl + "/clientes/" + cliente.id;
    return this.http.put<Cliente>(url, cliente);
  }
  
  delete(id : any):Observable<void> {
    const url = `${this.baseUrl}/clientes/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
