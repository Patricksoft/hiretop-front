import {Component} from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.scss'
})
export class DiscussionComponent {

  isSpinning = false;
  size: NzButtonSize = 'large';
  isModalSave: boolean = false;
  modalTitle: String = "Créer une discussion";
  validateForm!: FormGroup;
  validateDiscussionForm!: FormGroup;
  users: any;
  discussions: any;
  messages: any;
  selected_discussion: any;
  storage_link: any;
  helperServiceFront: HelperService;



  constructor(private router: Router, private fb: FormBuilder,
              private helperService: HelperService,
              private modal: NzModalService,
  ) {
    this.helperServiceFront = helperService;
  }

  ngOnInit(): void {
    this.storage_link = environment.publicUrl;
    this.initForm();
    this.getUsers();
    this.getDiscussions();
  }

  initForm() {
    this.validateForm = this.fb.group({
      user_id: [null, [Validators.required]],
    });

    this.validateDiscussionForm = this.fb.group({
      msg: [null, [Validators.required]],
    });


  }

  closeModal(): void {
    this.isModalSave = false;
  }


  submitForm(): void {
    this.isSpinning = true;

    this.helperService.store(this.validateForm.value, "discussions").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Discussion', "Nouvelle discussion");
        this.getDiscussions();
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

  submitMsgForm(): void {
    this.isSpinning = true;

    let payload = {
      ...this.validateDiscussionForm.value,
      discussion_id:this.selected_discussion.id
    };

    this.helperService.store(payload, "messages").subscribe({
      next: (response: any) => {
        console.log(response);
        this.initForm();
        this.helperService.setNotification('success', 'Message', "Message envoyé");
        this.getDiscussions();
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

  getUsers(): void {
    this.isSpinning = true;

    this.helperService.index("users")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.users = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

  getDiscussions(): void {
    this.isSpinning = true;

    this.helperService.index("discussions")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.discussions = response;
          if (this.discussions.length>0){
            this.showDetail(this.discussions[0]);
          }
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

  getMessages(params: any): void {
    this.isSpinning = true;

    this.helperService.index_params("messages", params)
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.messages = response;
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }


  showDetail(data: any): void {
    this.selected_discussion = data;
    this.getMessages({discussion_id:this.selected_discussion.id});
  }

}
