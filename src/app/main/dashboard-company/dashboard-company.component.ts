import { Component } from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrl: './dashboard-company.component.scss'
})
export class DashboardCompanyComponent {
  helperServiceFront: HelperService;
  isSpinning = false;
  statistics: any;


  constructor(private router: Router, private fb: FormBuilder,
              private helperService: HelperService,
              private modal: NzModalService,
  ) {
    this.helperServiceFront = helperService;
  }

  ngOnInit(): void {
    this.getStatistics();
  }



  getStatistics(): void {
    this.isSpinning = true;
    this.helperService.index("statistics")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.statistics = response;
          console.log(response);
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }
}
