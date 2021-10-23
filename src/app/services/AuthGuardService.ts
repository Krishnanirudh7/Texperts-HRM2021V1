import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TexpertsHttpService } from '../services/texperts-http.service'

@Injectable()
export class AuthGuardService implements CanActivate {
    loginFlag: any

    constructor(private _router: Router, private texpertsHttpService: TexpertsHttpService) {

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        this.loginFlag = this.texpertsHttpService.getTokenData()
        this.loginFlag = JSON.parse(this.loginFlag)  
        if (!this.loginFlag) {
            this._router.navigate(['/authentication/signin']);
            return false;
        }
        return true;
    }

}