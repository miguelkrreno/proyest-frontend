import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  login: FormGroup;

  constructor(private loginService: LoginService,
    private router: Router
  ) {
    this.login = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.pattern(/\S+\@\S+\.\S+/)]),
      password: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {

  }

  recogerDatosLogin() {
    this.loginService.registerUsuario(this.login.value).subscribe(response => {
      console.log(response);
      //falta decidir que hacemos despues de recibir la repuesta correcta.
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("isValidator", response.isValidator);


      if (response) {
        alert('Usuario registrado correctamente')


        if (response.isValidator == 1) {
          this.router.navigate(['/homeValidadores'])
        } else if (response.isValidator == 0) {
          this.router.navigate(['/home'])

        }

      }
      else {
        alert('Fallo a la hora de registrar intentelo de nuevo')
      }

    })
  }

  checkControl(controlName: string, errorName: string) {
    if (this.login.get(controlName)?.hasError(errorName) && this.login.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }

  }




}
