import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {LocationService} from "../../../services/location/location.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-set-company',
  templateUrl: './set-company.component.html',
  styleUrl: './set-company.component.scss'
})
export class SetCompanyComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  countries : any;
  sectors : any;
  company : any;
  file_doc_official : any;
  file_logo : any;
  storage_link : any;


  constructor(private router: Router, private fb: FormBuilder,
              private authService: AuthService,
              private helperService: HelperService,
              private locationService: LocationService,
  ) { }

  ngOnInit(): void {

    this.storage_link = environment.publicUrl;

    this.initForm();
    this.getCountries();
    this.getSectors();
    this.indexIdentityUser();

  }

  initForm():void{
    this.validateForm = this.fb.group({
      name: [null,[Validators.required]],
      creation_date: [null,[Validators.required]],
      sector_id: [null,[Validators.required]],
      doc_official_file: [null,[]],
      logo_file: [null,[]],
      contact: [null,[Validators.required]],
      email: ["single",[Validators.required]],
      country_id: [null,[Validators.required]],
      linkedin: [null,[]],
      web_site: [null,[]],
      fb_page: [null,[]],
    });
  }

  submitForm(): void {
    this.isSpinning = true;
    let data =  this.validateForm.value;
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    formData.append("doc_official",this.file_doc_official);
    formData.append("logo",this.file_logo);
    this.helperService.store(formData,"companies").subscribe({
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

  handleFileUpload(event:any, type:string):void {
    switch (type) {
      case "logo":
        this.file_logo = event.target.files[0];
        break;
      case "doc_official":
        this.file_doc_official = event.target.files[0];
        break;
    }
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

    this.helperService.index("companies").subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        this.company  = response;
        Object.keys(this.validateForm.value).forEach(key => {
          this.validateForm.controls[key].setValue(response[key]);
        });
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
