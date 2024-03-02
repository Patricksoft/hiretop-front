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

  data3: any;
  options3: any;

  array = ["assets/slide1.jpg","assets/slide2.jpg",];

  basicData: any;
  basicOptions: any;

  data: any;
  options: any;


  constructor(private router: Router, private fb: FormBuilder,
              private helperService: HelperService,
              private modal: NzModalService,
  ) {
    this.helperServiceFront = helperService;
  }

  ngOnInit(): void {
    this.getStatistics();
    this.loadChart4();

  }



  getStatistics(): void {
    this.isSpinning = true;
    this.helperService.index("statistics")
      .subscribe({
        next: (response: any) => {
          this.isSpinning = false;
          this.statistics = response;
          console.log(response);
          this.loadChart();
          this.loadChart2();
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }

  loadChart4() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: "Fréquence de candidature",
          data: [65, 59, 80, 81, 90, 110, 210],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },

      ]
    };

    this.options3 = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }


  loadChart() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Nombre de candidature', 'Nombre d\'offre', 'Nombre d\'interaction'],
      datasets: [
        {
          label: 'Candidatures',
          data: [this.statistics.applies_count, this.statistics.offres_count, this.statistics.interactions_count],
          backgroundColor: ['rgba(255, 159, ' + this.statistics.applies_count + ', 0.2)', 'rgba(75, 192, ' + this.statistics.offres_count + ', 0.2)', 'rgba(54, 162, ' + this.statistics.interactions_count + ', 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  loadChart2() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = 'rgba(0, 0, 0, 1)';

    this.data = {
      labels: ["Candidatures","Qualité des candidatures"],
      datasets: [
        {
          data: [(100-this.statistics.quality_applies),this.statistics.quality_applies],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
          hoverBackgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }


}
