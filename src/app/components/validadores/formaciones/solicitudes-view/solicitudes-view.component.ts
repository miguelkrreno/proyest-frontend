import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormacionesService } from 'src/app/services/formaciones.service';

@Component({
  selector: 'app-solicitudes-view',
  templateUrl: './solicitudes-view.component.html',
  styleUrls: ['./solicitudes-view.component.css']
})
export class SolicitudesViewComponent implements OnInit {

  misFormacionesValidadores: any;
  formularioComentario: FormGroup;


  constructor(private formacionServices: FormacionesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
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

    this.formacionServices.DatosFormacionValidadores().subscribe(data => {

      console.log(data);
      this.misFormacionesValidadores = data;

    });
  }

  borrarGuId() {

    localStorage.removeItem("guid");

  }

  enviarDatos() {
    const obj = {
      "registerId": this.misFormacionesValidadores.resgisterId,
      "nameRequest": this.misFormacionesValidadores.nameRequest,
      "guidRequest": this.misFormacionesValidadores.guid,
      "validatorId": this.misFormacionesValidadores.idValidator1,
      "commentValidator1": this.formularioComentario.value.comentario,
      "statusValidation1": this.formularioComentario.value.validar,


    }

    const obj2 = {
      "registerId": this.misFormacionesValidadores.resgisterId,
      "nameRequest": this.misFormacionesValidadores.nameRequest,
      "guidRequest": this.misFormacionesValidadores.guid,
      "validatorId": this.misFormacionesValidadores.idValidator2,
      "onBudget": this.formularioComentario.value.onBudget,
      "commentValidator1": this.misFormacionesValidadores.commentValidator1 === null ? "" : this.misFormacionesValidadores.commentValidator1,
      "commentValidator2": this.formularioComentario.value.comentario2,
      "idValidator1": this.misFormacionesValidadores.idValidator1,
      "statusValidation1": this.misFormacionesValidadores.statusValidation1 === null ? 1 : this.misFormacionesValidadores.statusValidation1,
      "statusValidation2": this.formularioComentario.value.validar,



    }

    const obj3 = {
      "registerId": this.misFormacionesValidadores.resgisterId,
      "nameRequest": this.misFormacionesValidadores.nameRequest,
      "guidRequest": this.misFormacionesValidadores.guid,
      "validatorId": this.misFormacionesValidadores.idValidator3,
      "onBudget": this.misFormacionesValidadores.onBudget,
      "commentValidator1": this.misFormacionesValidadores.commentValidator1 === null ? "" : this.misFormacionesValidadores.commentValidator1,
      "commentValidator2": this.misFormacionesValidadores.commentValidator2,
      "commentValidator3": this.formularioComentario.value.comentario3,
      "idValidator1": this.misFormacionesValidadores.idValidator1,
      "idValidator2": this.misFormacionesValidadores.idValidator2,
      "statusValidation1": this.misFormacionesValidadores.statusValidation1 === null ? 1 : this.misFormacionesValidadores.statusValidation1,
      "statusValidation2": this.misFormacionesValidadores.statusValidation2 === null ? 1 : this.misFormacionesValidadores.statusValidation1,
      "statusValidation3": this.formularioComentario.value.validar,



    }

    if (this.misFormacionesValidadores.validationLevel == "1") {
      debugger;
      this.formacionServices.enviarSolicitud(obj).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misFormacionesValidadores.validationLevel == "2") {
      debugger;

      this.formacionServices.enviarSolicitud2(obj2).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misFormacionesValidadores.validationLevel == "3") {
      debugger;

      this.formacionServices.enviarSolicitud3(obj3).subscribe(data => {
        console.log(data);
      })
    }
  }

}
