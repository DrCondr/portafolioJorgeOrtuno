import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.css']
})
export class NewskillsComponent implements OnInit {
  nombreS: string;
  descripcionS:string;

  constructor(private skillsS: SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skills = new Skills(this.nombreS , this.descripcionS);
    this.skillsS.save(skills).subscribe(
      data =>{
        alert("Certificado añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al crear el certificado");
        this.router.navigate(['']);
      }
    )
  }

}
