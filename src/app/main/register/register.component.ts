import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  validateForm!: FormGroup;
  validateCodeForm!: FormGroup;
  isSpinning = false;
  step : String = "register"; //register - validation

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService,
              private helperService: HelperService,) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]],
      email: [null,[Validators.required]],
      type: ["talent",[Validators.required]]
    });

    this.validateCodeForm = this.fb.group({
      email: [null,[Validators.required]],
      code: [null,[Validators.required]]
    });


  }

  submitForm(): void {
    this.isSpinning = true;

    this.authService.register(this.validateForm.value).subscribe({
      next: (response: any) => {
        console.log(response.data);
        //  this.router.navigate(["/auth"]);
        this.validateCodeForm.controls["email"].setValue(this.validateForm.value["email"]);
        this.helperService.setNotification('success', 'Création de compte', "Compte créé, veillez valiser votre compte");
        this.step = "validation";
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


  submitValidationForm(): void {
    this.isSpinning = true;

    this.authService.validation(this.validateCodeForm.value).subscribe({
      next: (response: any) => {
        console.log(response.data);
        this.helperService.setNotification('success', 'Création de compte', "Compte validé");
        this.router.navigate(["/auth"]);
        this.isSpinning = false;
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





}
