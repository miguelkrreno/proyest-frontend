import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viaje } from 'src/app/interfaces/viaje';
import { ViajesService } from 'src/app/services/viajes.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-view-viajes',
  templateUrl: './view-viajes.component.html',
  styleUrls: ['./view-viajes.component.css']
})
export class ViewViajesComponent implements OnInit {

  misViajes: any
  misViajesValidadores: any;
  isValidator: boolean = false;
  comentario: string = "";
  guId: string = "";
  registerId: number = 0;
  formularioComentario: FormGroup;




  constructor(private viajesService: ViajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formularioComentario = new FormGroup({
      comentario: new FormControl('', [

      ]),
      validar: new FormControl('', [
        Validators.required
      ]),
      onBudget: new FormControl('', [
        Validators.required
      ]),
      commentValidator1: new FormControl('', [

      ]),
      comentario2: new FormControl('', [

      ]),
      comentario3: new FormControl('', [

      ]),
    });
  }

  ngOnInit(): void {

    var guid = this.activatedRoute.snapshot.paramMap.get('guid');
    console.log(guid);

    if (guid != null) {
      localStorage.setItem("guid", guid);
    }


    let esValidador = localStorage.getItem("isValidator");

    if (esValidador == "0") {

      this.isValidator = false;
      this.viajesService.obtenerDatosViajes().subscribe(data => {


        this.misViajes = data;

      });

    } else if (esValidador == "1") {
      this.isValidator = true;


      this.viajesService.DatosViajesValidadores().subscribe(data => {


        this.misViajesValidadores = data;

      });
    }


  }

  // enviarValidacion() {

  //   this.viajesService.enviarSolicitud().subscribe(data => {


  //     this.misViajesValidadores = data;
  //     this.nameRequest;



  //     if (this.misViajesValidadores) {
  //       alert('formulario guardado correctamente')
  //       this.router.navigate(['/homeValidadores'])
  //     }
  //     else {
  //       alert('Fallo a la hora de registrar intentelo de nuevo')
  //     }

  //   });
  // }

  borrarGuId() {

    localStorage.removeItem("guid");

  }

  enviarDatos() {
    console.log(this.formularioComentario.value)

    const obj = {
      "registerId": this.misViajesValidadores.resgisterId,
      "nameRequest": this.misViajesValidadores.nameRequest,
      "guidRequest": this.misViajesValidadores.guid,
      "validatorId": this.misViajesValidadores.idValidator1,
      "commentValidator1": this.formularioComentario.value.comentario,
      "statusValidation1": this.formularioComentario.value.validar,


    }

    const obj2 = {
      "registerId": this.misViajesValidadores.resgisterId,
      "nameRequest": this.misViajesValidadores.nameRequest,
      "guidRequest": this.misViajesValidadores.guid,
      "validatorId": this.misViajesValidadores.idValidator2,
      "onBudget": this.formularioComentario.value.onBudget,
      "commentValidator1": this.misViajesValidadores.commentValidator1 === null ? "" : this.misViajesValidadores.commentValidator1,
      "commentValidator2": this.formularioComentario.value.comentario2,
      "idValidator1": this.misViajesValidadores.idValidator1,
      "statusValidation1": this.misViajesValidadores.statusValidation1 === null ? 1 : this.misViajesValidadores.statusValidation1,
      "statusValidation2": this.formularioComentario.value.validar,



    }

    const obj3 = {
      "registerId": this.misViajesValidadores.resgisterId,
      "nameRequest": this.misViajesValidadores.nameRequest,
      "guidRequest": this.misViajesValidadores.guid,
      "validatorId": this.misViajesValidadores.idValidator3,
      "onBudget": this.misViajesValidadores.onBudget,
      "commentValidator1": this.misViajesValidadores.commentValidator1 === null ? "" : this.misViajesValidadores.commentValidator1,
      "commentValidator2": this.misViajesValidadores.commentValidator2,
      "commentValidator3": this.formularioComentario.value.comentario3,
      "idValidator1": this.misViajesValidadores.idValidator1,
      "idValidator2": this.misViajesValidadores.idValidator2,
      "statusValidation1": this.misViajesValidadores.statusValidation1 === null ? 1 : this.misViajesValidadores.statusValidation1,
      "statusValidation2": this.misViajesValidadores.statusValidation2 === null ? 1 : this.misViajesValidadores.statusValidation1,
      "statusValidation3": this.formularioComentario.value.validar,



    }

    //     {
    //   "registerId": 0,
    //   "nameRequest": "string",
    //   "guidRequest": "string",
    //   "validatorId": 0,
    //   "onBudget": 0,
    //   "commentValidator1": "string",
    //   "commentValidator2": "string",
    //   "commentValidator3": "string",
    //   "idValidator1": 0,
    //   "idValidator2": 0,
    //   "statusValidation1": 0,
    //   "statusValidation2": 0,
    //   "statusValidation3": 0
    // }


    console.log(obj);
    console.log(obj2);
    console.log(obj3);

    if (this.misViajesValidadores.validationLevel == "1") {
      debugger;
      this.viajesService.enviarSolicitud(obj).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misViajesValidadores.validationLevel == "2") {
      debugger;

      this.viajesService.enviarSolicitud2(obj2).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misViajesValidadores.validationLevel == "3") {
      debugger;

      this.viajesService.enviarSolicitud3(obj3).subscribe(data => {
        console.log(data);
      })
    }
  }


}
