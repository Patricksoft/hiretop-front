import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(param: any) {
    return this.http.post(environment.publicUrl + 'oauth/token', param);
  }

  register(param: any) {
    return this.http.post(environment.baseUrl + 'register', param);
  }

  validation(param: any) {
    return this.http.post(environment.baseUrl + 'validation/account', param);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
