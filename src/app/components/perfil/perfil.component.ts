import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  users: any;
  validatores: any;
  isValidator: boolean = false;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {

    let esValidador = localStorage.getItem("isValidator");

    if (esValidador == "0") {

      this.isValidator = false;
      this.perfilService.obtenerUsuario().subscribe(data => {

        this.users = data;
        console.log("Usuario");
      })

    } else if (esValidador == "1") {
      this.isValidator = true;

      this.perfilService.obtenerValidador().subscribe(data => {

        this.validatores = data;
        console.log("Validador");


      });
    }

  }





}
