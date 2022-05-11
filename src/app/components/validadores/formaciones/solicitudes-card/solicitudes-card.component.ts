import { Component, Input, OnInit } from '@angular/core';
import { listaSolicitudes } from 'src/app/interfaces/listaSolicitudes';
import { ListadoValidadoresService } from 'src/app/services/listadoValidadores.service';

@Component({
  selector: 'app-solicitudes-card',
  templateUrl: './solicitudes-card.component.html',
  styleUrls: ['./solicitudes-card.component.css']
})
export class SolicitudesCardComponent implements OnInit {

  @Input() listaSolicitudes?: listaSolicitudes;
  // @Input() viajes: Viaje | any;

  constructor(private listadoValidadores: ListadoValidadoresService,
    // private viajesService: ViajesService
  ) {

  }

  ngOnInit(): void {

    if (this.listaSolicitudes?.guid != undefined) {
      console.log(this.listaSolicitudes);
    }


  }

}
