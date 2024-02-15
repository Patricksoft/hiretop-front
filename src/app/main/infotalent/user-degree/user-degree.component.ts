import {Component} from '@angular/core';
import {NzSpinComponent} from "ng-zorro-antd/spin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {LocationService} from "../../../services/location/location.service";
import {environment} from "../../../../environments/environment";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-user-degree',
  templateUrl: './user-degree.component.html',
  styleUrl: './user-degree.component.scss'
})
export class UserDegreeComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  degrees: any;
  sectors: any;
  user_degrees: any;
  isModalSave: boolean = false;
  modalTitle: String = "Enregistrement";

  constructor(private router: Router, private fb: FormBuilder,
              private authService: AuthService,
              private helperService: HelperService,
              private modal: NzModalService,
              private locationService: LocationService,
  ) {
  }

  ngOnInit(): void {

    this.initForm();
    this.getDegrees();
    this.getSectors();
    this.getUserDegree();

  }

  initForm() {
    this.validateForm = this.fb.group({
      degree_id: [null, [Validators.required]],
      intitule: [null, [Validators.required]],
      school: [null, [Validators.required]],
      sector_id: [null, [Validators.required]],
      begin: [null, [Validators.required]],
      end: [null, [Validators.required]],
      id: [null, []],
    });

  }

  closeModal(): void {
    this.isModalSave = false;
  }

  submitForm(): void {
    this.isSpinning = true;

    this.helperService.store(this.validateForm.value, "user-degrees").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Diplôme', "Mise à jour effectuée");
        this.getUserDegree();
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
      this.validateForm.controls[key].setValue(data[key]);
      if (key=="degree_id"){
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
    this.helperService.delete("user-degrees/"+data.id)
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.getUserDegree();
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

  getUserDegree(): void {
    this.isSpinning = true;

    this.helperService.index("user-degrees")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.user_degrees = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }


}
