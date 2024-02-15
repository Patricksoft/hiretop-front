import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {LocationService} from "../../../services/location/location.service";
import {environment} from "../../../../environments/environment";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-experience-pro',
  templateUrl: './experience-pro.component.html',
  styleUrl: './experience-pro.component.scss'
})
export class ExperienceProComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  sectors: any;
  experiences: any;
  isModalSave: boolean = false;
  modalTitle: String = "Enregistrement";
  countries : any;
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
    this.getExp();

  }

  initForm() {
    this.validateForm = this.fb.group({
      label: [null, [Validators.required]],
      company: [null, [Validators.required]],
      begin: [null, [Validators.required]],
      end: [null, [Validators.required]],
      sector_id: [null, [Validators.required]],
      type_work: ["full_time", [Validators.required]],
      type_location: ["on_site", [Validators.required]],
      region_id: [null, [Validators.required]],
      description: [null, [Validators.required]],
      current_post: [false, [Validators.required]],
      id: [null, []],
    });

  }

  closeModal(): void {
    this.isModalSave = false;
  }

  submitForm(): void {
    this.isSpinning = true;

    this.helperService.store(this.validateForm.value, "experiences").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Diplôme', "Mise à jour effectuée");
        this.getExp();
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
    console.log(data);
    Object.keys(this.validateForm.value).forEach(key => {
      if (key=="sector_id"){
        this.validateForm.controls[key].setValue(""+data[key]+"");
      }else{
        this.validateForm.controls[key].setValue(data[key]);
      }
    });
    this.isModalSave = true;
  }

  deleteUserDegree(data: any) {
    this.modal.confirm({
      nzTitle: "Suppression",
      nzContent: "Êtes-vous sûr de vouloir effectuer cette suppression",
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteUserDegreeAction(data),
      nzCancelText: 'Annuler',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deleteUserDegreeAction(data: any) {
    this.isSpinning = true;
    this.helperService.delete("experiences/"+data.id)
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.getExp();
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

  getExp(): void {
    this.isSpinning = true;

    this.helperService.index("experiences")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.experiences = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }



}
