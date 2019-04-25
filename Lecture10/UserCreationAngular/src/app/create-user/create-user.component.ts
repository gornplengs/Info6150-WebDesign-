import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  model: any = {};

  constructor(private userService: UserService, private router: Router) { }//注入依赖 成为类的属性

  ngOnInit() {
  }

  createUser() {
    this.userService.create(this.model)
      .subscribe(
        data => this.router.navigate(['/'])
      );
  }
}
