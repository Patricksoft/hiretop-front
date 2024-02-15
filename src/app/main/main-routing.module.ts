import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InfotalentComponent} from "./infotalent/infotalent.component";
import {InfoCompanyComponent} from "./info-company/info-company.component";
import {CompanyOfferComponent} from "./company-offer/company-offer.component";
import {ApplyOfferComponent} from "./apply-offer/apply-offer.component";
import {CompanyOfferAppliesComponent} from "./company-offer-applies/company-offer-applies.component";
import {ApplyProcessComponent} from "./apply-process/apply-process.component";
import {TalentOfferApplyComponent} from "./talent-offer-apply/talent-offer-apply.component";
import {DiscussionComponent} from "./discussion/discussion.component";
import {DashboardCompanyComponent} from "./dashboard-company/dashboard-company.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'dashboard-company', component: DashboardCompanyComponent},
      {path: 'info-talent', component: InfotalentComponent},
      {path: 'info-company', component: InfoCompanyComponent},
      {path: 'company-offers', component: CompanyOfferComponent},
      {path: 'apply-offers', component: ApplyOfferComponent},
      {path: 'company-offer-applies/:slug', component: CompanyOfferAppliesComponent},
      {path: 'apply-process/:slug/:id', component: ApplyProcessComponent},
      {path: 'talent-offer-applies', component: TalentOfferApplyComponent},
      {path: 'discussions', component: DiscussionComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
