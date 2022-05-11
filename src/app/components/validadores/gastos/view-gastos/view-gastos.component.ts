import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AprobacionGastosService } from 'src/app/services/aprobacion-gastos.service';

@Component({
  selector: 'app-view-gastos',
  templateUrl: './view-gastos.component.html',
  styleUrls: ['./view-gastos.component.css']
})
export class ViewGastosComponent implements OnInit {

  misGastosValidadores: any
  formularioComentario: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
    private aprobacionGastosService: AprobacionGastosService
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


    // var guid = this.activatedRoute.snapshot.paramMap.get('guid');
    // console.log(guid);


    this.aprobacionGastosService.DatosGastosValidadores().subscribe(data => {


      this.misGastosValidadores = data;

    });

  }

  borrarGuId() {

    localStorage.removeItem("guid");

  }

  enviarDatos() {
    const obj = {
      "registerId": this.misGastosValidadores.resgisterId,
      "nameRequest": this.misGastosValidadores.nameRequest,
      "guidRequest": this.misGastosValidadores.guid,
      "validatorId": this.misGastosValidadores.idValidator1,
      "commentValidator1": this.formularioComentario.value.comentario,
      "statusValidation1": this.formularioComentario.value.validar,


    }

    const obj2 = {
      "registerId": this.misGastosValidadores.resgisterId,
      "nameRequest": this.misGastosValidadores.nameRequest,
      "guidRequest": this.misGastosValidadores.guid,
      "validatorId": this.misGastosValidadores.idValidator2,
      "onBudget": this.formularioComentario.value.onBudget,
      "commentValidator1": this.misGastosValidadores.commentValidator1 === null ? "" : this.misGastosValidadores.commentValidator1,
      "commentValidator2": this.formularioComentario.value.comentario2,
      "idValidator1": this.misGastosValidadores.idValidator1,
      "statusValidation1": this.misGastosValidadores.statusValidation1 === null ? 1 : this.misGastosValidadores.statusValidation1,
      "statusValidation2": this.formularioComentario.value.validar,



    }

    const obj3 = {
      "registerId": this.misGastosValidadores.resgisterId,
      "nameRequest": this.misGastosValidadores.nameRequest,
      "guidRequest": this.misGastosValidadores.guid,
      "validatorId": this.misGastosValidadores.idValidator3,
      "onBudget": this.misGastosValidadores.onBudget,
      "commentValidator1": this.misGastosValidadores.commentValidator1 === null ? "" : this.misGastosValidadores.commentValidator1,
      "commentValidator2": this.misGastosValidadores.commentValidator2,
      "commentValidator3": this.formularioComentario.value.comentario3,
      "idValidator1": this.misGastosValidadores.idValidator1,
      "idValidator2": this.misGastosValidadores.idValidator2,
      "statusValidation1": this.misGastosValidadores.statusValidation1 === null ? 1 : this.misGastosValidadores.statusValidation1,
      "statusValidation2": this.misGastosValidadores.statusValidation2 === null ? 1 : this.misGastosValidadores.statusValidation1,
      "statusValidation3": this.formularioComentario.value.validar,



    }

    if (this.misGastosValidadores.validationLevel == "1") {
      debugger;
      this.aprobacionGastosService.enviarSolicitud(obj).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misGastosValidadores.validationLevel == "2") {
      debugger;

      this.aprobacionGastosService.enviarSolicitud2(obj2).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misGastosValidadores.validationLevel == "3") {
      debugger;

      this.aprobacionGastosService.enviarSolicitud3(obj3).subscribe(data => {
        console.log(data);
      })
    }
  }

}
