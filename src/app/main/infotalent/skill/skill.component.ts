import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {HelperService} from "../../../services/helper/helper.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {LocationService} from "../../../services/location/location.service";
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  validateForm!: FormGroup;
  isSpinning = false;
  skills: any;
  user_skills: any;
  isModalSave: boolean = false;
  modalTitle: String = "Enregistrement";

  constructor(private router: Router, private fb: FormBuilder,
              private authService: AuthService,
              private helperService: HelperService,
              private modal: NzModalService,
  ) {
  }

  ngOnInit(): void {

    this.initForm();
    this.getSkills();
    this.getUserSkill();

  }

  initForm() {
    this.validateForm = this.fb.group({
      skill_id: [null, [Validators.required]],
      year_exp: [1, [Validators.required]],
      id: [null, []],
    });

  }

  closeModal(): void {
    this.isModalSave = false;
  }

  submitForm(): void {
    this.isSpinning = true;

    this.helperService.store(this.validateForm.value, "user-skills").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Compétence', "Mise à jour effectuée");
        this.getUserSkill();
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

  edit(data: any): void {
    console.log(data);
    Object.keys(this.validateForm.value).forEach(key => {
      if (key=="skill_id"){
        this.validateForm.controls[key].setValue(""+data[key]+"");
      }else{
        this.validateForm.controls[key].setValue(data[key]);
      }
    });
    this.isModalSave = true;
    console.log(this.validateForm.value);
  }

  delete(data: any) {
    this.modal.confirm({
      nzTitle: "Suppression",
      nzContent: "Êtes-vous sûr de vouloir effectuer cette suppression",
      nzOkText: 'Supprimer',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteAction(data),
      nzCancelText: 'Annuler',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deleteAction(data: any) {
    this.isSpinning = true;
    this.helperService.delete("user-skills/"+data.id)
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.getUserSkill();
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

  getUserSkill(): void {
    this.isSpinning = true;

    this.helperService.index("user-skills")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.user_skills = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

}
