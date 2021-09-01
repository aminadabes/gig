import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membro } from '../model/Membro';

@Injectable({
  providedIn: 'root'
})
export class TesourariaService {
  urlBase = "http://192.168.25.124:8080/v1/membros";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public postContribuicao(contribruicao: any): Observable<Membro> {
    return this.httpClient.post<any>(this.urlBase, contribruicao, this.httpOptions);
  }
}