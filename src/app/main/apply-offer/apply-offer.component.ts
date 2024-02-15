import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HelperService} from "../../services/helper/helper.service";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";
import {environment} from "../../../environments/environment";
import {NzSelectSizeType} from "ng-zorro-antd/select";

@Component({
    selector: 'app-apply-offer',
    templateUrl: './apply-offer.component.html',
    styleUrl: './apply-offer.component.scss'
})
export class ApplyOfferComponent {
    validateForm!: FormGroup;
    isSpinning = false;
    offers: any;
    selected_offer: any;
    helperServiceFront: HelperService;
    storage_link: any;
    isModalSave: boolean = false;
    modalTitle: String = "Postuler chez ";
    identity: any;
    searchValidateForm!: FormGroup;
    countries: any;
    size: NzSelectSizeType = 'default';
    skills: any;
    degrees: any;
    sectors: any;


    current = 0;

    index = 'First-content';

    panels = [
        {
            active: false,
            name: 'Infos sur l’entreprise',
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
    ) {
        this.helperServiceFront = helperService;
    }

    ngOnInit(): void {
        this.storage_link = environment.publicUrl;
        this.initForm();
        this.getOffers();
        this.indexIdentityUser();

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
            sectors: [[], []],
            type_contracts: [[], []],
            type_location: [[], []],
            languages: [[], []],
            year_exp_max: [null, []],
            remunerations_min: [null, []],
        });
    }


    getOffers(params: any = {page: 1, checkIfRequest: true}): void {
        this.isSpinning = true;

        this.helperService.index_params("offers", params)
            .subscribe({
                next: (response: any) => {
                    this.isSpinning = false;
                    this.offers = response;
                    if (this.offers.data.length > 0) {
                        this.showDetail(this.offers.data[0]);
                    }
                },
                error: (error: any) => {
                    this.isSpinning = false;
                },
            })
    }

    showDetail(data: any): void {
        console.log(data);
        this.selected_offer = data;
        this.validateForm.controls["offer_id"].setValue(this.selected_offer.id);
    }

    pageIndexChanged(number: number) {
        this.getOffers({page: number, checkIfRequest: true});
    }

    closeModal(): void {
        this.isModalSave = false;
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
                this.pre();
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

    pre(): void {
        this.current -= 1;
        this.changeContent();
    }

    next(): void {
        this.current += 1;
        this.changeContent();
    }

    done(): void {
        console.log('done');
    }

    changeContent(): void {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    }

    applyProcess(): void {
        this.isModalSave = true;
    }


    indexIdentityUser(): void {
        this.isSpinning = true;

        this.helperService.index("info-account").subscribe({
            next: (response: any) => {
                this.isSpinning = false;
                this.identity = response;
            },
            error: (error: any) => {
                this.isSpinning = false;
            },
        })
    }


    submitSearchForm(): void {
        this.isSpinning = true;
        let payload = {
            page: 1,
            checkIfRequest: true,
            by_offer_search: true,
            ...this.searchValidateForm.value
        };
        this.helperService.store(payload, "applies-search")
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

    submitConfigSearchForm(): void {
        this.isSpinning = true;
        let payload = {
            page: 1,
            checkIfRequest: true,
            by_config: true,
        };
        this.helperService.store(payload, "applies-search")
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
