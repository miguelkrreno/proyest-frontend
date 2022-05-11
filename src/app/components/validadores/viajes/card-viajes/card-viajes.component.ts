import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from 'src/app/interfaces/viaje';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-card-viajes',
  templateUrl: './card-viajes.component.html',
  styleUrls: ['./card-viajes.component.css']
})
export class CardViajesComponent implements OnInit {

  @Input() viajes: Viaje | any;

  constructor(private viajesService: ViajesService) { }

  ngOnInit(): void {
  }

}
