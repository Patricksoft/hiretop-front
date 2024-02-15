import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {environment} from "../../../environments/environment";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  validateForm!: FormGroup;
  isSpinning = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService,
              private helperService: HelperService,) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  submitForm(): void {
    this.isSpinning = true;
    let payload = {
      ...this.validateForm.value,
      'grant_type' : 'password',
      'client_id' : environment.client_id,
      'client_secret' :  environment.client_secret,
    }
    this.authService.login(payload).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.access_token);
        this.fetchUser();
      },
      error: (error: any) => {
        this.helperService.setNotification('error', 'Erreur', error.error.message);
        this.isSpinning = false;
      },
      complete: () => {
        this.isSpinning = false;
      },
    })
  }

  fetchUser() {
    this.helperService.index("user-auth")
      .subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response));
          if (response.type=="talent"){
            this.router.navigate(["/dashboard"]);
          }else{
            this.router.navigate(["/dashboard-company"]);
          }
        },
        error: (error: any) => {
        },
      })
  }




}
