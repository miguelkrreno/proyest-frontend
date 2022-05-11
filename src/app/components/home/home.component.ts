import { Component, OnInit } from '@angular/core';
import { RequestUnic } from 'src/app/interfaces/requestUnic';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayRequests: RequestUnic[] = [];

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    
    const response = await this.userService.getAllRequest();
    this.dataDistribute(response);

  }

  dataDistribute(pResponse: any):void{
    this.arrayRequests = pResponse.results;

  }
  

}
