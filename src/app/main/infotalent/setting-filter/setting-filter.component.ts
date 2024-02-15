import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {LocationService} from "../../../services/location/location.service";
import {environment} from "../../../../environments/environment";
import {NzSelectSizeType} from "ng-zorro-antd/select";

@Component({
  selector: 'app-setting-filter',
  templateUrl: './setting-filter.component.html',
  styleUrl: './setting-filter.component.scss'
})
export class SettingFilterComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  countries : any;
  sectors : any;
  user_settings : any = {
    countries:[],
  };
  identity : any;
  file_cv : any;
  storage_link : any;
  size: NzSelectSizeType = 'default';



  constructor(private router: Router, private fb: FormBuilder,
              private authService: AuthService,
              private helperService: HelperService,
              private locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.storage_link = environment.publicUrl;

    this.getCountries();
    this.getSectors();
    this.indexUserSetting();

  }

  initForm():void{
    this.validateForm = this.fb.group({
      regions: [[],[Validators.required]],
      sectors: [[],[Validators.required]],
      type_contracts: [[],[Validators.required]],
      type_location: [[],[Validators.required]],
      languages: [[],[Validators.required]],
      year_exp_max: [1,[Validators.required]],
      remunerations_min: [1,[Validators.required]],
    });
  }

  submitForm(): void {
    this.isSpinning = true;
    let data =  this.validateForm.value;
    this.helperService.store(data, "settings").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Configuration', "Mise à jour effectuée");
        this.indexUserSetting();
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
        console.log("con",response);
      },
      error: (error: any) => {
        this.isSpinning = false;
      },
    })
  }


  indexUserSetting(): void {
    this.isSpinning = true;

    this.helperService.index("settings").subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        Object.keys(this.validateForm.value).forEach(key => {
          this.validateForm.controls[key].setValue(response[key]);
        });
        this.validateForm.controls["year_exp_max"].setValue(response["year_exp"]);
        this.validateForm.controls["remunerations_min"].setValue(response["remuneration"]);
      },
      error: (error: any) => {
        this.isSpinning = false;
      },
    })
  }



  getSectors(): void {
    this.isSpinning = true;

    this.helperService.index("sectors")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.sectors = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

}
