import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimientos } from 'src/app/model/conocimientos';
import { SConocimientoService } from 'src/app/service/s-conocimiento.service';

@Component({
  selector: 'app-new-conoc',
  templateUrl: './new-conoc.component.html',
  styleUrls: ['./new-conoc.component.css']
})
export class NewConocComponent implements OnInit {
  tituloC:string = '';
  centroC:string = '';
  anios:number = 0;

  constructor(private sConocimientos:SConocimientoService, private router:Router) { }
  

  ngOnInit(): void {
  }

  onCreateC(): void{
    const cono = new Conocimientos(this.tituloC, this.centroC, this.anios);
    this.sConocimientos.save(cono).subscribe(data =>{alert("Conocimiento añadido");
    this.router.navigate([''])
    }, err =>{
      alert("Fallo");
      this.router.navigate([''])
    }
    )
  }

}
