import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-view-compras',
  templateUrl: './view-compras.component.html',
  styleUrls: ['./view-compras.component.css']
})
export class ViewComprasComponent implements OnInit {


  misComprasValidadores: any;
  formularioComentario: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
    private compraService: CompraService
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


    this.compraService.DatosComprasValidadores().subscribe(data => {


      this.misComprasValidadores = data;

    });

  }

  borrarGuId() {

    localStorage.removeItem("guid");

  }

  enviarDatos() {
    const obj = {
      "registerId": this.misComprasValidadores.resgisterId,
      "nameRequest": this.misComprasValidadores.nameRequest,
      "guidRequest": this.misComprasValidadores.guid,
      "validatorId": this.misComprasValidadores.idValidator1,
      "commentValidator1": this.formularioComentario.value.comentario,
      "statusValidation1": this.formularioComentario.value.validar,


    }

    const obj2 = {
      "registerId": this.misComprasValidadores.resgisterId,
      "nameRequest": this.misComprasValidadores.nameRequest,
      "guidRequest": this.misComprasValidadores.guid,
      "validatorId": this.misComprasValidadores.idValidator2,
      "onBudget": this.formularioComentario.value.onBudget,
      "commentValidator1": this.misComprasValidadores.commentValidator1 === null ? "" : this.misComprasValidadores.commentValidator1,
      "commentValidator2": this.formularioComentario.value.comentario2,
      "idValidator1": this.misComprasValidadores.idValidator1,
      "statusValidation1": this.misComprasValidadores.statusValidation1 === null ? 1 : this.misComprasValidadores.statusValidation1,
      "statusValidation2": this.formularioComentario.value.validar,



    }

    const obj3 = {
      "registerId": this.misComprasValidadores.resgisterId,
      "nameRequest": this.misComprasValidadores.nameRequest,
      "guidRequest": this.misComprasValidadores.guid,
      "validatorId": this.misComprasValidadores.idValidator3,
      "onBudget": this.misComprasValidadores.onBudget,
      "commentValidator1": this.misComprasValidadores.commentValidator1 === null ? "" : this.misComprasValidadores.commentValidator1,
      "commentValidator2": this.misComprasValidadores.commentValidator2,
      "commentValidator3": this.formularioComentario.value.comentario3,
      "idValidator1": this.misComprasValidadores.idValidator1,
      "idValidator2": this.misComprasValidadores.idValidator2,
      "statusValidation1": this.misComprasValidadores.statusValidation1 === null ? 1 : this.misComprasValidadores.statusValidation1,
      "statusValidation2": this.misComprasValidadores.statusValidation2 === null ? 1 : this.misComprasValidadores.statusValidation1,
      "statusValidation3": this.formularioComentario.value.validar,



    }



    if (this.misComprasValidadores.validationLevel == "1") {
      debugger;
      this.compraService.enviarSolicitud(obj).subscribe(data => {
        console.log(data);
      })
    }


    if (this.misComprasValidadores.validationLevel == "2") {
      debugger;

      this.compraService.enviarSolicitud2(obj2).subscribe(data => {
        console.log(data);
      })
    }

    if (this.misComprasValidadores.validationLevel == "3") {
      debugger;

      this.compraService.enviarSolicitud3(obj3).subscribe(data => {
        console.log(data);
      })
    }
  }

}
