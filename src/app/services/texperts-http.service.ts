import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, interval, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import{environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TexpertsHttpService {
  userInfo: any;
  accessToken:any=""
  httpHeaders:any
  loginFlag: boolean=  false;
  basicUrl:any = environment.apiURL
  constructor(private http: HttpClient) { }

  get(url:any) {
    return this.http.get(url);
  }
  postLogin(url:any){

  }
  getByQueryParams(url:any, queryParams:any) {
    return this.http.get(url, { params: queryParams })
  }
  formPost(url:any, formObj:any) {
    let body = new URLSearchParams();
    for (let key in formObj) {
      body.set(key, formObj[key]);
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(url, body.toString(), {
      headers, observe: 'response'
    });
  }

  post(url:any, data:any) {
    this.accessToken =localStorage.getItem('TokenData')
    this.httpHeaders = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' +JSON.parse(this.accessToken).access_token
      }),
    };
    return this.http.post(this.basicUrl+url, data, this.httpHeaders);
  }

  put(url:any, data:any) {
    return this.http.put(url, data);
  }
  delete(url:any, queryParams:any) {
    return this.http.delete(url, { params: queryParams });
  }

  getToken() {
    let token = localStorage.getItem("Token")
    return token || "";
  }
  setToken(token:any) {
    localStorage.setItem("Token", token);
  }

  setUserSession(userSession:any) {
    localStorage.setItem("TexpertsUserSession", JSON.stringify(userSession));
  }
  getUserSession() {
    if (!localStorage.getItem('TexpertsUserSession')) {
      return {}
    } else {
      return localStorage.getItem('TexpertsUserSession');
    }
  }

  setTokenData(data:any) {
    localStorage.setItem("TokenData", JSON.stringify(data));
  }
  getTokenData() {

    if (!localStorage.getItem('TokenData')) {
      return null
    } else {
      return localStorage.getItem('TokenData');
    }
  }
  deleteTokenData() {
    localStorage.removeItem('TokenData')
    localStorage.removeItem('Token');
  }
  // public validate(token: string) {
  //   console.log("validate");
  //   return interval(1000).subscribe((x) => {
  //     console.log("interval", x)
  //     let data = this.getTokenData();
  //     if (data) {
  //       var now = moment(new Date()); //todays date
  //       var end = moment(new Date(data['.issued'])); // another date
  //       var duration = moment.duration(now.diff(end));
  //       var mins = duration.asMinutes();
  //       if (mins > 1 && mins < 2) {
  //         let obj = {
  //           "grant_type": "refresh_token",
  //           "refresh_token": encodeURIComponent(data['refresh_token'])
  //         };
  //         this.formPost('token', obj).subscribe((response: any) => {
  //           console.log("token refreshed", response);
  //           this.setToken(response.body['access_token']);
  //           this.setTokenData(response.body);

  //         }, (error) => {

  //           console.log("Refresh Token Error", error);
  //         });
  //       }
  //     }
  //     return "hello";
  //   });
  // }

  // refreshToken() {

  //   let data = this.getTokenData();
  //   let obj = {
  //     "grant_type": "refresh_token",
  //     "refresh_token": encodeURIComponent(data['refresh_token'])
  //   };
  //   return this.formPost('token', obj);

  // }

  clearSession() {
    localStorage.removeItem('TexpertsUserSession')
    }
    setLoginFlag(value:boolean){
      return this.loginFlag = value
    }
    getLoginFlag(){
      return this.loginFlag
    }

  public subjectForUpdate: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public subjectForLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public clearSubject() {
    this.subjectForUpdate = new BehaviorSubject<any>('');
  }
  public setLoader() {
    this.subjectForLoader = new BehaviorSubject<boolean>(true);
  }
}
