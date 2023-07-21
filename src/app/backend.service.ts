import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  buscarInformacion(identificador: string): Observable<any> {
    const url = `${this.baseUrl}/movimientos/cliente/${identificador}`;
    return this.http.get<any>(url);
  }
}

