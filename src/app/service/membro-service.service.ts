import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membro } from '../model/Membro';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  urlBase = "http://192.168.25.124:8080/v1/membros";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(
    private httpClient: HttpClient
  ) { }

  
  public getMembros(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlBase);
  }

  public getMembroById(id: number){
    return this.httpClient.get(this.urlBase +"/"+id);
  }

  public postMembros(membro: any): Observable<Membro> {
    return this.httpClient.post<any>(this.urlBase, membro, this.httpOptions);
  }
}
