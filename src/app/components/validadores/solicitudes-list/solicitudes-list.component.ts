import { Component, OnInit } from '@angular/core';
import { listaSolicitudes } from 'src/app/interfaces/listaSolicitudes';
import { ListadoValidadoresService } from 'src/app/services/listadoValidadores.service';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.css']
})
export class SolicitudesListComponent implements OnInit {

  // solicitudes: listaSolicitudes[] = [];
  solicitudes: any;

  constructor(private listadoValidadores: ListadoValidadoresService
  ) { }

  ngOnInit(): void {


    this.listadoValidadores.verSolicitudes().subscribe(data => {


      this.solicitudes = data;


      console.log(this.solicitudes);
      console.log(data);
    });

  }

  volverInicio() {
    localStorage.removeItem("userId");
    localStorage.removeItem("isValidator");
  }


}
