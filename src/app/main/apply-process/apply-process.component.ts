import {Component} from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-apply-process',
  templateUrl: './apply-process.component.html',
  styleUrl: './apply-process.component.scss'
})
export class ApplyProcessComponent {
  isSpinning = false;
  current = 0;
  index = 'First-content';
  helperServiceFront: HelperService;
  slug: string | null = "";
  apply_id: string | null = "";
  offer: any;
  validateForm!: FormGroup;


  constructor(private router: Router, private fb: FormBuilder,
              private helperService: HelperService,
              private modal: NzModalService,
              private activatedRoute: ActivatedRoute
  ) {
    this.helperServiceFront = helperService;
  }

  ngOnInit() {
    this.initForm();
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.apply_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getOffers();
  }

  initForm() {
    this.validateForm = this.fb.group({
      msg: [null, []],
      selection_interview_planning1: [null, []],
      selection_interview_planning2: [null, []],
      selection_interview_planning3: [null, []],
      selection_interview_planning: [null, []],
      competency_interview_planning1: [null, []],
      competency_interview_planning2: [null, []],
      competency_interview_planning3: [null, []],
      selection_decision: [null, []],
      competency_interview_planning_selected: [null, []],
      competency_interview_decision: [null, []],
      reference_checking_decision: [null, []],
      job_offer_decision: [null, []],
      final_decision_decision: [null, []],
      msg2: [null, []],
      msg3: [null, []],
      msg4: [null, []],
      msg5: [null, []],
      msg6: [null, []],
    });

  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  goTo(position: number): void {
    this.current = position;
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

  getOffers(params: any = {
    page: 1,
    for_company_relation: true,
    slug: this.slug,
    apply_id: this.apply_id
  }): void {
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
      });
  }

  submitForm(): void {
    console.log("val",this.validateForm.value);
    this.isSpinning = true;

    let payload = {
      apply_id: this.apply_id,
      step:this.offer.applies[0]["process_apply"]!=null ? this.offer.applies[0]["process_apply"]["step"] : null,
      ...this.validateForm.value
    };

    this.helperService.store(payload, "process-apply").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Offre', "Mise à jour effectuée");
        this.getOffers();
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

}
