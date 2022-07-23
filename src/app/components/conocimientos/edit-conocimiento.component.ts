import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conocimientos } from 'src/app/model/conocimientos';
import { SConocimientoService } from 'src/app/service/s-conocimiento.service';

@Component({
  selector: 'app-edit-conocimiento',
  templateUrl: './edit-conocimiento.component.html',
  styleUrls: ['./edit-conocimiento.component.css']
})
export class EditConocimientoComponent implements OnInit {
  conoc: Conocimientos = null;

  constructor(private sConocimientos: SConocimientoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sConocimientos.detail(id).subscribe(
      data =>{
        this.conoc = data;
      }, err => {
        alert("Error al modificar el conocimiento");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateC():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sConocimientos.update(id, this.conoc).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {

      }
    )
  }

}
