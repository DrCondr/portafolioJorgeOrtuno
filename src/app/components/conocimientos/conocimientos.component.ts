import { Component, OnInit } from '@angular/core';
import { Conocimientos } from 'src/app/model/conocimientos';
import { SConocimientoService } from 'src/app/service/s-conocimiento.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  conoc: Conocimientos[] = [];

  constructor(private sCocimientos: SConocimientoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarConocimientos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarConocimientos():void{
    this.sCocimientos.listac().subscribe(data => {this.conoc = data;})
  }

  deleteC(id?: number){
    if(id != undefined){
      this.sCocimientos.delete(id).subscribe(
        data => {
          this.cargarConocimientos();
        }, err => {
          alert("No se pudo borrar el conocimiento");
        }
      )
    }
  }

}


