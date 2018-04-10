import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = USERS;
  inputUsername: string;
  inputPassword: string;

  login() : void {
    //document.getElementsByName('username').value = "haha";
    this.inputUsername = (<HTMLInputElement>document.getElementById('inputUsername')).value;
    this.inputPassword = (<HTMLInputElement>document.getElementById('inputPassword')).value;
    var logged=true;

    for (let user of USERS) {
      if (user.username == this.inputUsername){
        if (user.password == this.inputPassword){
          this.loginSuccess(user);
          logged = false;
        }
      }
    }
    if (logged) alert('Wrong username or password');
  }

  loginSuccess(user: User) : void{
    alert("login success");
  }

  constructor() { }

  ngOnInit() {
  }

}
