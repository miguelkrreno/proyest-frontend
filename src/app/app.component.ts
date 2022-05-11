import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bussines-expenses';
  login: boolean = false;

  constructor(private router: Router) {

  }

  ngDoCheck() {
    this.login = (parseInt(localStorage.getItem('isValidator')!) === 0) ? true : false;
  }

  existSession(){
    localStorage.removeItem('userId');
    localStorage.removeItem('isValidator');
    this.router.navigate(['/login']);


  }

}
