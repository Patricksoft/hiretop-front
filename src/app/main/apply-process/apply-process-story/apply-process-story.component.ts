import {Component, Input} from '@angular/core';
import {HelperService} from "../../../services/helper/helper.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-apply-process-story',
  templateUrl: './apply-process-story.component.html',
  styleUrl: './apply-process-story.component.scss'
})
export class ApplyProcessStoryComponent {
  @Input() offer : any;
  @Input() pos : number=0;

  helperServiceFront: HelperService;

  constructor(private helperService: HelperService) {
    this.helperServiceFront = helperService;
  }
}
