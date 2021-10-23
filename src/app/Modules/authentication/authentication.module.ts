import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import{TexpertsHttpService} from '../../services/texperts-http.service'
import { DefaultModule } from '../../shared-modules/default/default.module'
import { PrimengModule } from '../../shared-modules/primeng/primeng.module';


@NgModule({
  declarations: [AuthenticationComponent, SigninComponent, SignupComponent],
  imports: [
    HttpClientModule,
    DefaultModule,
    PrimengModule,
    AuthenticationRoutingModule
  ],
  providers: [TexpertsHttpService]
})
export class AuthenticationModule { }
