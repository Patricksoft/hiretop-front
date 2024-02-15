import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { AuthComponent } from './auth/auth.component';


import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzPipesModule } from 'ng-zorro-antd/pipes';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { EditorModule } from '@tinymce/tinymce-angular';


import {RegisterComponent} from "./register/register.component";
import {InfotalentComponent} from "./infotalent/infotalent.component";
import {InfoAccountComponent} from "./infotalent/info-account/info-account.component";
import {UserDegreeComponent} from "./infotalent/user-degree/user-degree.component";
import {ExperienceProComponent} from "./infotalent/experience-pro/experience-pro.component";
import {SkillComponent} from "./infotalent/skill/skill.component";
import {SettingFilterComponent} from "./infotalent/setting-filter/setting-filter.component";
import {InfoCompanyComponent} from "./info-company/info-company.component";
import {SetCompanyComponent} from "./info-company/set-company/set-company.component";
import {SetCompanyDetailComponent} from "./info-company/set-company-detail/set-company-detail.component";
import {CompanyOfferComponent} from "./company-offer/company-offer.component";
import {ApplyOfferComponent} from "./apply-offer/apply-offer.component";
import {CompanyOfferAppliesComponent} from "./company-offer-applies/company-offer-applies.component";
import {ApplyProcessComponent} from "./apply-process/apply-process.component";
import {TalentOfferApplyComponent} from "./talent-offer-apply/talent-offer-apply.component";
import {ApplyProcessStoryComponent} from "./apply-process/apply-process-story/apply-process-story.component";
import {DiscussionComponent} from "./discussion/discussion.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardCompanyComponent} from "./dashboard-company/dashboard-company.component";


@NgModule({
  declarations: [
    MainComponent,
    AuthComponent,
    RegisterComponent,
    InfotalentComponent,
    InfoAccountComponent,
    UserDegreeComponent,
    ExperienceProComponent,
    SkillComponent,
    SettingFilterComponent,
    InfoCompanyComponent,
    SetCompanyComponent,
    SetCompanyDetailComponent,
    CompanyOfferComponent,
    ApplyOfferComponent,
    CompanyOfferAppliesComponent,
    ApplyProcessComponent,
    TalentOfferApplyComponent,
    ApplyProcessStoryComponent,
    DiscussionComponent,
    DashboardComponent,
    DashboardCompanyComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzStatisticModule,
    NzCardModule,
    NzSpaceModule,
    NzGridModule,
    NzDropDownModule,
    NzAvatarModule,
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzPipesModule,
    CommonModule, NzInputModule, NzInputNumberModule, NzSelectModule, NzUploadModule, NzRadioModule, NzCheckboxModule,
    FormsModule, ReactiveFormsModule, RouterModule,
    MainRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzStatisticModule,
    NzCardModule,
    NzSpaceModule,
    NzGridModule,
    NzDropDownModule,
    NzTableModule,
    NzFormModule,
    NzButtonModule,
    EditorModule
  ]
})
export class MainModule { }
