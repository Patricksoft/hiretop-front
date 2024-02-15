import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HelperService} from "../../services/helper/helper.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {environment} from "../../../environments/environment";
import {NzSelectSizeType} from "ng-zorro-antd/select";

@Component({
  selector: 'app-company-offer-applies',
  templateUrl: './company-offer-applies.component.html',
  styleUrl: './company-offer-applies.component.scss'
})
export class CompanyOfferAppliesComponent {

  isSpinning = false;
  offer: any;
  slug: string | null = "";
  storage_link: any;
  isModalSave: boolean = false;
  modalTitle: String = "Curriculum vitae";
  selected_cv: any;
  validateForm!: FormGroup;
  searchValidateForm!: FormGroup;
  helperServiceFront: HelperService;
  countries: any;
  size: NzSelectSizeType = 'default';
  skills: any;
  degrees: any;
  sectors: any;


  panels = [
    {
      active: false,
      name: 'Consulter les informations',
      disabled: false
    },
  ];

  search_panels = [
    {
      active: false,
      name: 'Recherche avancée',
      disabled: false
    },
  ];


  constructor(private router: Router, private fb: FormBuilder,
              private helperService: HelperService,
              private modal: NzModalService,
              private activatedRoute: ActivatedRoute
  ) {
    this.helperServiceFront = helperService;
  }

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.storage_link = environment.publicUrl;
    this.getOffers();
    this.getCountries();
    this.getSkills();
    this.getDegrees();
    this.getSectors();
    this.initFormSearch();

  }

  initForm() {
    this.validateForm = this.fb.group({
      motivation: [null, [Validators.required]],
      offer_id: [null, [Validators.required]],
    });
  }

  initFormSearch() {
    this.searchValidateForm = this.fb.group({
      regions: [[], []],
      skills: [[], []],
      degrees: [[], []],
      sectors: [[], []],
      type_contracts: [[], []],
      type_location: [[], []],
      languages: [[], []],
      year_exp_min: [null, []],
      year_exp_max: [null, []],
      remunerations_min: [null, []],
      remunerations_max: [null, []],
    });
  }


  getOffers(params: any = {page: 1, company: true, for_company_relation: true, slug: this.slug}): void {
    this.isSpinning = true;

    this.helperService.index_params("offers", params)
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          if (response.data.length > 0) {
            this.offer = response.data[0];
          }
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }


  closeModal(): void {
    this.isModalSave = false;
  }

  showDetail(data: any): void {
    console.log(data);
    this.selected_cv = data;
    this.isModalSave = true;
  }

  submitForm(): void {
    this.isSpinning = true;

    this.helperService.store(this.validateForm.value, "applies").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Candidature', "Vous avez postulé à cette offre");
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

  submitSearchForm(): void {
    this.isSpinning = true;
    let payload = {
      page: 1,
      company: true,
      for_company_relation: true,
      by_apply_search: true,
      slug: this.slug,
      ...this.searchValidateForm.value
    };
    this.helperService.store(payload, "applies-search")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
            this.offer = response.data[0];
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

  getCountries(): void {
    this.isSpinning = true;

    this.helperService.index("countries").subscribe({
      next: (response: any) => {
        this.isSpinning = false;
        this.countries = response;
      },
      error: (error: any) => {
        this.isSpinning = false;
      },
    })
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

  getDegrees(): void {
    this.isSpinning = true;

    this.helperService.index("degrees")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.degrees = response;
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
