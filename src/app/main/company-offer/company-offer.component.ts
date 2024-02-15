import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {HelperService} from "../../services/helper/helper.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {LocationService} from "../../services/location/location.service";
import {NzSelectSizeType} from "ng-zorro-antd/select";

@Component({
  selector: 'app-company-offer',
  templateUrl: './company-offer.component.html',
  styleUrl: './company-offer.component.scss'
})
export class CompanyOfferComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  sectors: any;
  offers: any;
  skills: any;
  isModalSave: boolean = false;
  modalTitle: String = "Enregistrement";
  countries : any;
  size: NzSelectSizeType = 'default';
  helperServiceFront: HelperService;



  constructor(private router: Router, private fb: FormBuilder,
              private helperService: HelperService,
              private modal: NzModalService,
  ) {
    this.helperServiceFront  = helperService;
  }

  ngOnInit(): void {

    this.initForm();
    this.getCountries();
    this.getSectors();
    this.getOffers();
    this.getSkills();

  }

  initForm() {
    this.validateForm = this.fb.group({
      label: [null, [Validators.required]],
      country_id: [null, [Validators.required]],
      remunerations_min: [1, [Validators.required]],
      remunerations_max: [10, [Validators.required]],
      type_location: ["on_site", [Validators.required]],
      sector_id: [null, [Validators.required]],
      year_exp_min: [1, [Validators.required]],
      year_exp_max: [2, [Validators.required]],
      type_work: ["full_time", [Validators.required]],
      languages: [[], [Validators.required]],
      skills: [[], [Validators.required]],
      detail: ["", [Validators.required]],
      status: [true, [Validators.required]],
      id: [null, []],
    });

  }

  closeModal(): void {
    this.isModalSave = false;
  }

  submitForm(): void {
    this.isSpinning = true;

    this.helperService.store(this.validateForm.value, "offers").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Offre', "Mise à jour effectuée");
        this.getOffers();
        this.isModalSave = false;
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

  editUserDegree(data: any): void {
    Object.keys(this.validateForm.value).forEach(key => {
      if (key=="country_id" || key=="sector_id"){
        this.validateForm.controls[key].setValue(""+data[key]+"");
      }else{
        this.validateForm.controls[key].setValue(data[key]);
      }
    });
    this.validateForm.controls["year_exp_min"].setValue(data["year_exp"][0]);
    this.validateForm.controls["year_exp_max"].setValue(data["year_exp"][1]);
    this.validateForm.controls["remunerations_min"].setValue(data["interval_salary"][0]);
    this.validateForm.controls["remunerations_max"].setValue(data["interval_salary"][1]);
    let array_skills = [];
    for (let i = 0; i < data["offer_skills"].length; i++) {
      array_skills.push(""+data["offer_skills"][i]["skill_id"]+"");
    }
    this.validateForm.controls["skills"].setValue(array_skills);
    console.log(this.validateForm.value);
    this.isModalSave = true;
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

  getOffers(params: any={page:1,company:true,for_company:true}): void {
    this.isSpinning = true;

    this.helperService.index_params("offers", params)
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.offers = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }


  getCountries(): void {
    this.isSpinning = true;

    this.helperService.index("countries")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.countries = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }


  pageIndexChanged(number:number){
      this.getOffers({page:number,company:true,for_company:true});
  }

  getSkills(): void {
    this.isSpinning = true;

    this.helperService.index("skills")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.skills = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

}
