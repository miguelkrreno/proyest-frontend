import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AprobacionGastosService } from 'src/app/services/aprobacion-gastos.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-solicitud-aprobacion-gastos',
  templateUrl: './solicitud-aprobacion-gastos.component.html',
  styleUrls: ['./solicitud-aprobacion-gastos.component.css']
})
export class SolicitudAprobacionGastosComponent implements OnInit {

  formSolicitudGastos: FormGroup;
  dateNow = new Date();
  uuidRandom = Math.random().toString(36).substring(2, 11)
  numberUser: number = parseInt(localStorage.getItem("userId")!);
  obtUser: any;

  constructor(private aprobacionService: AprobacionGastosService,
              private perfilService: PerfilService,
              private router: Router) {

    this.formSolicitudGastos = new FormGroup({
      guid: new FormControl(this.uuidRandom, [Validators.required]),
      userId: new FormControl(this.numberUser, [Validators.required]),
      dateRequest: new FormControl(this.dateNow, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      projectCode: new FormControl('', []),
      expenseReason: new FormControl('', [Validators.required]),
      expenseDate: new FormControl('', [Validators.required]),
      expenseType: new FormControl('', [Validators.required]),
      expenseAmount: new FormControl('', [Validators.required]),
      expenseReceipt: new FormControl('', [Validators.required])


    }, []);

  }

  ngOnInit(): void {

    this.perfilService.obtenerUsuario().subscribe(data => {
      this.obtUser = data;

      console.log(this.obtUser);

      this.formSolicitudGastos = new FormGroup({
        guid: new FormControl(this.uuidRandom, [Validators.required]),
        userId: new FormControl(this.numberUser, [Validators.required]),
        dateRequest: new FormControl(this.dateNow, [Validators.required]),
        name: new FormControl(this.obtUser?.name, [Validators.required]),
        lastname: new FormControl(this.obtUser?.lastname, [Validators.required]),
        area: new FormControl(this.obtUser?.area, [Validators.required]),
        department: new FormControl('', [Validators.required]),
        projectCode: new FormControl('', []),
        expenseReason: new FormControl('', [Validators.required]),
        expenseDate: new FormControl('', [Validators.required]),
        expenseType: new FormControl('', [Validators.required]),
        expenseAmount: new FormControl('', [Validators.required]),
        expenseReceipt: new FormControl('', [Validators.required])

      },[]);
    })
  }

  async getDataForm() {
    console.log(this.formSolicitudGastos.value);
    const response = await this.aprobacionService.registerExpense(this.formSolicitudGastos.value);
    console.log('respuesta servidor', response);


    if (response.userId) {
      this.router.navigate(['/home']);
    } else {
      alert(response.error)
    }

  }

  checkControl(controlName: string, errorName: string) {
    if (this.formSolicitudGastos.get(controlName)?.hasError(errorName) && this.formSolicitudGastos.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }

  }

}
