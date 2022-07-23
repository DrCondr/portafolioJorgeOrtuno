import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conocimientos } from '../model/conocimientos';

@Injectable({
  providedIn: 'root'
})
export class SConocimientoService {
  conUrl = 'http://localhost:8080/conoci/'

  constructor(private httpClient: HttpClient) { }

  public listac(): Observable<Conocimientos[]>{
    return this.httpClient.get<Conocimientos[]>(this.conUrl + 'listac');
  }

  public detail(id: number): Observable<Conocimientos> {
    return this.httpClient.get<Conocimientos>(this.conUrl + `detailc/${id}`)
  }

  public save(conocimientos: Conocimientos): Observable<any>{
    return this.httpClient.post<any>(this.conUrl + 'createc', conocimientos);
  }

  public update(id:number, conocimientos:Conocimientos):Observable<any>{
    return this.httpClient.put<any>(this.conUrl + `updatec/${id}`, conocimientos);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.conUrl + `deletec/${id}`);
  }
}
