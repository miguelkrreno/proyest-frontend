import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-solicitud-compra',
  templateUrl: './solicitud-compra.component.html',
  styleUrls: ['./solicitud-compra.component.css']
})
export class SolicitudCompraComponent implements OnInit {

  formSolicitudCompra: FormGroup;
  dateNow = new Date();
  uuidRandom = Math.random().toString(36).substring(2, 11)
  numberUser: number = parseInt(localStorage.getItem("userId")!);
  obtUser: any;


  constructor(private compraService: CompraService,
              private perfilService: PerfilService,
              private router: Router) { 

    this.formSolicitudCompra = new FormGroup({
      guid: new FormControl(this.uuidRandom, [Validators.required]),
      userId: new FormControl(this.numberUser, [Validators.required]),
      dateRequest: new FormControl(this.dateNow, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      projectCode: new FormControl('', []),
      purchaseReason: new FormControl('', [Validators.required]),
      purchaseDate: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
      supplier: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      appoximateAmount: new FormControl('', [Validators.required])
      

    },[]);

  }

  ngOnInit(): void {
    
    this.perfilService.obtenerUsuario().subscribe(data => {
      this.obtUser = data;

      console.log(this.obtUser);

      this.formSolicitudCompra = new FormGroup({
        guid: new FormControl(this.uuidRandom, [Validators.required]),
        userId: new FormControl(this.numberUser, [Validators.required]),
        dateRequest: new FormControl(this.dateNow, [Validators.required]),
        name: new FormControl(this.obtUser?.name, [Validators.required]),
        lastname: new FormControl(this.obtUser?.lastname, [Validators.required]),
        area: new FormControl(this.obtUser?.area, [Validators.required]),
        department: new FormControl('', [Validators.required]),
        projectCode: new FormControl('', []),
        purchaseReason: new FormControl('', [Validators.required]),
        purchaseDate: new FormControl('', [Validators.required]),
        product: new FormControl('', [Validators.required]),
        supplier: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        appoximateAmount: new FormControl('', [Validators.required])
        

      },[]);
    })
  }

  async getDataForm(){
    console.log(this.formSolicitudCompra.value);
    const response = await this.compraService.registerPurchase(this.formSolicitudCompra.value);
    console.log('respuesta servidor', response);

    if(response.userId){
      this.router.navigate(['/home']);
    } else {
      alert(response.error)
    }

  }

  checkControl(controlName: string, errorName: string){
    if(this.formSolicitudCompra.get(controlName)?.hasError(errorName) && this.formSolicitudCompra.get(controlName)?.touched){
      return true;
    } else{
      return false;
    }

  }

}
