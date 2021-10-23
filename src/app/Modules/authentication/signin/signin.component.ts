import { Component, OnInit } from '@angular/core';
import { Login } from '../../../models/login';
import { AuthenticationService } from '../authentication.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TexpertsHttpService } from '../../../services/texperts-http.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: any = FormGroup
  validatingLogin: boolean = false;
  constructor(private AuthenticationService: AuthenticationService, private fb: FormBuilder, private router: Router, private messageService: MessageService, private texpertsHttpService: TexpertsHttpService) {
    this.loginForm = this.fb.group({
      UserName: "",
      Password: ""
    })
  }

  ngOnInit() {
    this.AuthenticationService.deleteTokenData();
    this.AuthenticationService.clearSession();
    this.texpertsHttpService.loginFlag = false
  }
  login() {
    let credentials = this.loginForm.value;
    this.validatingLogin = true;
    let obj = {
      "UserName": this.loginForm.value.UserName,
      "Password": this.loginForm.value.Password
    }
    this.AuthenticationService.login(obj).subscribe((response: any) => {
      console.log("seesion response", response);
      this.AuthenticationService.setUserSession(response);
      this.AuthenticationService.setTokenData(response)
      this.AuthenticationService.setLoginFlag(true)
      if (response.newRole == "Marketer" || response.newRole == "MarketerAdmin") {
        this.router.navigate(['home']);
        this.validatingLogin = false;
      }
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: "Authentication", detail: "Invalid Username or Password" }); //'Error while getting user session'
      this.validatingLogin = false;
    });
  }



}

