import {Component} from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  helperServiceFront: HelperService;
  isSpinning = false;
  statistics: any;

  basicData: any;
  basicOptions: any;

  data: any;
  options: any;

  data2: any;
  options2: any;


  data3: any;
  options3: any;

  data4: any;
  options4: any;

  array = ["assets/slide1.jpg","assets/slide2.jpg",];

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
          this.loadChart3();
          this.loadChart5();
        },
        error: (error: any) => {
          this.isSpinning = false;
        },
      })
  }


  loadChart() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Nombre de candidature', 'Nombre de candidature préselectionnée', 'Nombre de candidature finalisée'],
      datasets: [
        {
          label: 'Candidatures',
          data: [this.statistics.count_applies, this.statistics.count_applies_preselection, this.statistics.count_applies_finalise],
          backgroundColor: ['rgba(255, 159, ' + this.statistics.count_applies + ', 0.2)', 'rgba(75, 192, ' + this.statistics.count_applies_preselection + ', 0.2)', 'rgba(54, 162, ' + this.statistics.count_applies_finalise + ', 0.2)'],
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
      labels: this.statistics.skills.labels,
      datasets: [
        {
          data: this.statistics.skills.values,
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

  loadChart3() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = 'rgba(0, 0, 0, 1)';

    this.data2 = {
      labels: this.statistics.user_skills.labels,
      datasets: [
        {
          data: this.statistics.user_skills.values,
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
          hoverBackgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }
      ]
    };

    this.options2 = {
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

  loadChart4() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data3 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: "Fréquence de publication des offres",
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

  loadChart5(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data4 = {
      labels: this.statistics["sectors"]["labels"],
      datasets: [
        {
          label: 'Secteur',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data:  this.statistics["sectors"]["values"]
        },

      ]
    };

    this.options4 = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
            color: textColorSecondary,
            font: {
              weight: 500
            }
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
}
