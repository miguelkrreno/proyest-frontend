import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormacionesService } from 'src/app/services/formaciones.service';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-solicitud-formacion',
  templateUrl: './solicitud-formacion.component.html',
  styleUrls: ['./solicitud-formacion.component.css']
})
export class SolicitudFormacionComponent implements OnInit {

  solicitudFormacion: FormGroup;
  dateNow = new Date();
  uuidRandom = Math.random().toString(36).substring(2, 11)
  myDate = new Date();
  validDate: boolean = true;
  numberUser: number = parseInt(localStorage.getItem("userId")!);
  obtUser: any;



  constructor(public datepipe: DatePipe,
              private formacionesServices: FormacionesService,
              private perfilService: PerfilService,
              private router: Router
  ) {

    this.solicitudFormacion = new FormGroup({
      guid: new FormControl(this.uuidRandom, [Validators.required]),
      userId: new FormControl(this.numberUser, [Validators.required]),
      dateRequest: new FormControl(this.dateNow, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      projectCode: new FormControl('', []),
      trainingReason: new FormControl('', [Validators.required]),
      startTrainingDate: new FormControl('', [Validators.required]),
      endTrainingDate: new FormControl('', [Validators.required]),
      requestedTraining: new FormControl('', [Validators.required]),
      supplier: new FormControl('', [Validators.required]),
      hours: new FormControl('', [Validators.required]),
      startTrainingTime: new FormControl(null, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]),
      endTrainingTime: new FormControl(null, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]),
      participantsNumber: new FormControl('', [Validators.required]),
      approximateAmount: new FormControl('', [Validators.required])
    },[]);

  }

  async ngOnInit(): Promise<void> {
    this.perfilService.obtenerUsuario().subscribe(data => {
      this.obtUser = data;

      console.log(this.obtUser);

      this.solicitudFormacion = new FormGroup({
        guid: new FormControl(this.uuidRandom, [Validators.required]),
        userId: new FormControl(this.numberUser, [Validators.required]),
        dateRequest: new FormControl(this.dateNow, [Validators.required]),
        name: new FormControl(this.obtUser?.name, [Validators.required]),
        lastname: new FormControl(this.obtUser?.lastname, [Validators.required]),
        area: new FormControl(this.obtUser?.area, [Validators.required]),
        department: new FormControl('', [Validators.required]),
        projectCode: new FormControl('', []),
        trainingReason: new FormControl('', [Validators.required]),
        startTrainingDate: new FormControl('', [Validators.required]),
        endTrainingDate: new FormControl('', [Validators.required]),
        requestedTraining: new FormControl('', [Validators.required]),
        supplier: new FormControl('', [Validators.required]),
        hours: new FormControl('', [Validators.required]),
        startTrainingTime: new FormControl(null, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]),
        endTrainingTime: new FormControl(null, [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]),
        participantsNumber: new FormControl('', [Validators.required]),
        approximateAmount: new FormControl('', [Validators.required])
      },[]);
    })
  }

  recogerDatos() {
    console.log(this.solicitudFormacion.value);
    this.formacionesServices.registerFormacion(this.solicitudFormacion.value).subscribe(response => {
      console.log(response)
      //falta decidir que hacemos despues de recibir la repuesta correcta.
      if (response.userId) {
        alert('Usuario registros correctamente')
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

    if (this.solicitudFormacion.get('startTrainingDate')?.touched && this.solicitudFormacion.get('startTrainingDate')?.value !== '' && new Date(this.solicitudFormacion.get('startTrainingDate')?.value).getTime() < miliSecs) {
      this.validDate = false;

    } else {
      this.validDate = true;
    }


    if (this.solicitudFormacion.get(controlName)?.hasError(errorName) && this.solicitudFormacion.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }



}
