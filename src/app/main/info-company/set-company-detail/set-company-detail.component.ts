import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {LocationService} from "../../../services/location/location.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-set-company-detail',
  templateUrl: './set-company-detail.component.html',
  styleUrl: './set-company-detail.component.scss'
})
export class SetCompanyDetailComponent {
  @Input() item = '';
  validateForm!: FormGroup;
  isSpinning = false;
  countries: any;
  sectors: any;
  company: any;
  file_cv: any;
  storage_link: any;
  key_title: String = "A propos";


  constructor(private router: Router, private fb: FormBuilder,
              private authService: AuthService,
              private helperService: HelperService,
              private locationService: LocationService,
  ) {
  }

  ngOnInit(): void {

    this.storage_link = environment.publicUrl;

    this.initForm();
    this.getCountries();
    this.getSectors();
    this.key_title = this.getPageTitle(this.item);
    this.indexCompanyInfo();

  }

  initForm(): void {
    this.validateForm = this.fb.group({
      key: ["", [Validators.required]],
    });
  }

  // @ts-ignore
  getPageTitle(value: string): string {
    switch (value) {
      case "about":
        return "A propos";
      case "story":
        return "Histoire";
      case "culture":
        return "Culture";
      case "valeur":
        return "Nos valeurs";
    }
  }

  submitForm(): void {
    this.isSpinning = true;

    let data = this.validateForm.value;
    const formData = new FormData();
    formData.append(this.item, data["key"]);

    this.helperService.store(formData, "company-details").subscribe({
      next: (response: any) => {
        console.log(response);
        this.helperService.setNotification('success', 'Présentation', "Mise à jour effectuée");
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

  handleFileUpload(event: any): void {
    this.file_cv = event.target.files[0];
  }

  getCountries(): void {
    this.isSpinning = true;

    this.locationService.getCountries().subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        this.countries = response;
      },
      error: (error: any) => {
        this.isSpinning = false;
      },
    })
  }


  indexCompanyInfo(): void {
    this.isSpinning = true;

    this.helperService.index("company-details").subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        this.company = response;
        this.validateForm.controls["key"].setValue(response[this.item]);
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
