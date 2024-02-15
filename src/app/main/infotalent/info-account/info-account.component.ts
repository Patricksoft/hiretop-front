import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {LocationService} from "../../../services/location/location.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-info-account',
  templateUrl: './info-account.component.html',
  styleUrl: './info-account.component.scss'
})
export class InfoAccountComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  countries : any;
  identity : any;
  file_cv : any;
  storage_link : any;


  constructor(private router: Router, private fb: FormBuilder,
              private authService: AuthService,
              private helperService: HelperService,
              private locationService: LocationService,
              ) { }

  ngOnInit(): void {

    this.storage_link = environment.publicUrl;

    this.validateForm = this.fb.group({
      firstname: [null,[Validators.required]],
      lastname: [null,[Validators.required]],
      email: [null,[Validators.required]],
      phone: [null,[Validators.required]],
      birthday: [null,[Validators.required]],
      marital_status: ["single",[Validators.required]],
      country_id: [null,[Validators.required]],
      address: [null,[Validators.required]],
      cv_file: [null,[]],
      linkedin: [null,[]],
    });

    this.getCountries();
    this.indexIdentityUser();

  }

  submitForm(): void {
    this.isSpinning = true;
    let data =  this.validateForm.value;
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    formData.append("cv",this.file_cv);
    this.helperService.store(formData,"info-account").subscribe({
      next: (response: any) => {
        console.log(response);
        this.helperService.setNotification('success', 'Informations du compte', "Mise à jour effectuée");
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

   handleFileUpload(event:any):void {
     this.file_cv = event.target.files[0];
     console.log(this.file_cv);
  }

  getCountries(): void {
    this.isSpinning = true;

    this.locationService.getCountries().subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        this.countries  = response;
      },
      error: (error: any) => {
        this.isSpinning = false;
      },
    })
  }


    indexIdentityUser(): void {
    this.isSpinning = true;

    this.helperService.index("info-account").subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        this.identity  = response;
        Object.keys(this.validateForm.value).forEach(key => {
          if (key=="country_id"){
            this.validateForm.controls[key].setValue(""+response[key]+"");
          }else{
            this.validateForm.controls[key].setValue(response[key]);
          }
        });
      },
      error: (error: any) => {
        this.isSpinning = false;
      },
    })
  }


}
