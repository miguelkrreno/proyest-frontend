import { Component, Input, OnInit } from '@angular/core';
import { RequestUnic } from 'src/app/interfaces/requestUnic';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-card-user-request',
  templateUrl: './card-user-request.component.html',
  styleUrls: ['./card-user-request.component.css']
})
export class CardUserRequestComponent implements OnInit {

  @Input() myRequest: RequestUnic | any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.myRequest);
  }

}
