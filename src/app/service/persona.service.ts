import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }

  //Metodo para borrar personas prueba
  
  /*public deletePersona(id:Number): Observable<Number>{
    return this.http.delete<Number>(this.URL+'borrar/' +id ); 
  }*/
}
