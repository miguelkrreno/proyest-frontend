import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ViajesService } from 'src/app/services/viajes.service';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-solicitud-viajes',
  templateUrl: './solicitud-viajes.component.html',
  styleUrls: ['./solicitud-viajes.component.css']
})
export class SolicitudViajesComponent implements OnInit {

  solicitudViajes: FormGroup;
  dateNow = new Date();
  myDate = new Date();
  validDate: boolean = true;
  uuidRandom = Math.random().toString(36).substring(2, 11);
  numberUser: number = parseInt(localStorage.getItem("userId")!);
  obtUser: any;


  constructor(public datepipe: DatePipe,
              private viajesServices: ViajesService,
              private perfilService: PerfilService,
              private router: Router
  ) {

    this.solicitudViajes = new FormGroup({
      guid: new FormControl(this.uuidRandom, [Validators.required]),
      userId: new FormControl(this.numberUser, [Validators.required]),
      dateRequest: new FormControl(this.dateNow, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      projectCode: new FormControl('', []),
      travelPurpouse: new FormControl('', [Validators.required]),
      departureDate: new FormControl('', [Validators.required]),
      arrivalDate: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      transportType: new FormControl('', [Validators.required]),
      kilometrers: new FormControl('', []),
      overnightStay: new FormControl('', [Validators.required]),
      approximateAmount: new FormControl('', [Validators.required]),
      hotelName: new FormControl('', []),
      hotelUrl: new FormControl('', []),

    },[]);

  }

  async ngOnInit(): Promise<void> {
    this.perfilService.obtenerUsuario().subscribe(data => {
      this.obtUser = data;
      console.log(this.obtUser);

      this.solicitudViajes = new FormGroup({
        guid: new FormControl(this.uuidRandom, [Validators.required]),
        userId: new FormControl(this.numberUser, [Validators.required]),
        dateRequest: new FormControl(this.dateNow, [Validators.required]),
        name: new FormControl(this.obtUser?.name, [Validators.required]),
        lastname: new FormControl(this.obtUser?.lastname, [Validators.required]),
        area: new FormControl(this.obtUser?.area, [Validators.required]),
        department: new FormControl('', [Validators.required]),
        projectCode: new FormControl('', []),
        travelPurpouse: new FormControl('', [Validators.required]),
        departureDate: new FormControl('', [Validators.required]),
        arrivalDate: new FormControl('', [Validators.required]),
        origin: new FormControl('', [Validators.required]),
        destination: new FormControl('', [Validators.required]),
        transportType: new FormControl('', [Validators.required]),
        kilometrers: new FormControl('', []),
        overnightStay: new FormControl('', [Validators.required]),
        approximateAmount: new FormControl('', [Validators.required]),
        hotelName: new FormControl('', []),
        hotelUrl: new FormControl('', []),

      },[]);
    })

  }

  recogerDatosViajes() {
    console.log(this.solicitudViajes.value);
    this.viajesServices.registerViajes(this.solicitudViajes.value).subscribe(response => {
      console.log(response)
      //falta decidir que hacemos despues de recibir la repuesta correcta.
      if (response.userId) {
        alert('formulario guardado correctamente')
        this.router.navigate(['/home'])
      }
      else {
        alert('Fallo a la hora de registrar intentelo de nuevo')
      }

    })
  }

  checkControl(controlName: string, errorName: string) {


    let onlyDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd')
    let miliSecs = 0;

    if (onlyDate != null) {
      miliSecs = new Date(onlyDate).getTime()
    }

    if (this.solicitudViajes.get('departureDate')?.touched && this.solicitudViajes.get('departureDate')?.value !== '' && new Date(this.solicitudViajes.get('departureDate')?.value).getTime() < miliSecs) {
      this.validDate = false;

    } else {
      this.validDate = true;
    }

    if (this.solicitudViajes.get(controlName)?.hasError(errorName) && this.solicitudViajes.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }



}
