import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
import { TexpertsHttpService} from '../../services/texperts-http.service';
import{environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseurl:any = environment.apiURL+"token/"
  httpOptions:any = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private TexpertsHttpService: TexpertsHttpService,private http: HttpClient ) { }
  
  test() {
    return this.TexpertsHttpService.get("auth/login");
  }

  login(credentials:any) {
    const authUrl = "https://efsdevapi.azurewebsites.net/token";
    const payload = `grant_type=password&username=${credentials.UserName}&password=${credentials.Password}`;
    return this.http.post(authUrl, payload, this.httpOptions)
  }

  refreshToken(data:any) {
    return this.TexpertsHttpService.formPost("token", data);
  }
  deleteTokenData() {
    return this.TexpertsHttpService.deleteTokenData();
  }
  getUserSessions(userSessionObj:any) {
    return this.TexpertsHttpService.getByQueryParams("ApiLogin/GetUserSessionData", userSessionObj);
  }
  setToken(token:any) {
    this.TexpertsHttpService.setToken(token);
  }
  setTokenData(data:any) {
    this.TexpertsHttpService.setTokenData(data);
  }

  getTokenData() {
    this.TexpertsHttpService.getTokenData();
  }

  setUserSession(userSession:any) {
    this.TexpertsHttpService.setUserSession(userSession);
  }
  getUserSession() {
    this.TexpertsHttpService.getUserSession();
  }
  clearSession() {
    this.TexpertsHttpService.clearSession();
  }
  setLoginFlag(value:boolean){
this.TexpertsHttpService.setLoginFlag(value)
  }
}
