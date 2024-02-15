import {
  NzSpinComponent,
  NzSpinModule
} from "./chunk-RWPMWO5X.js";
import {
  NzColDirective,
  NzGridModule,
  NzRowDirective
} from "./chunk-BZPSFOEK.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-Z2FW2J6M.js";
import "./chunk-AJIMBDSD.js";
import "./chunk-AF5UR5LW.js";
import "./chunk-QQEJWKOS.js";
import {
  NzAvatarComponent,
  NzAvatarModule
} from "./chunk-ADKEDO7E.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-KLWQZNTF.js";
import "./chunk-QF32ESAK.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-OBJM4G4T.js";
import "./chunk-CUUEOFAA.js";
import {
  NzDestroyService
} from "./chunk-UQD6WDPZ.js";
import "./chunk-3Z4XHAHP.js";
import "./chunk-PYRWNFBU.js";
import "./chunk-T2IM57ZC.js";
import {
  Directionality
} from "./chunk-OBII6L4R.js";
import "./chunk-J2CHXYUT.js";
import {
  InputBoolean
} from "./chunk-BGFQYVOV.js";
import {
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-XEMLBLQE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  NgZone,
  Optional,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-LKJUCJSS.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  __decorate,
  defer,
  exhaustMap,
  merge,
  of,
  startWith,
  take,
  takeUntil
} from "./chunk-JKR55PDT.js";
import "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-list.mjs
var _c0 = ["*"];
function NzListItemMetaAvatarComponent_nz_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-avatar", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzSrc", ctx_r0.nzSrc);
  }
}
function NzListItemMetaAvatarComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!nzSrc"]);
  }
}
function NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-list-item-meta-avatar", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzSrc", ctx_r0.avatarStr);
  }
}
function NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-avatar");
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.avatarTpl);
  }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r5.nzTitle);
  }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-title");
    ɵɵtemplate(1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
  }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r6.nzDescription);
  }
}
function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-description");
    ɵɵtemplate(1, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzDescription);
  }
}
function NzListItemMetaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template, 2, 1, "nz-list-item-meta-title", 1)(2, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template, 2, 1, "nz-list-item-meta-description", 1);
    ɵɵprojection(3, 1);
    ɵɵprojection(4, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.nzTitle && !ctx_r2.titleComponent);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.nzDescription && !ctx_r2.descriptionComponent);
  }
}
var _c1 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
var _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c3 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_li_0_ng_template_1_Template(rf, ctx) {
}
function NzListItemActionsComponent_li_0_em_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 3);
  }
}
function NzListItemActionsComponent_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, NzListItemActionsComponent_li_0_ng_template_1_Template, 0, 0, "ng-template", 1)(2, NzListItemActionsComponent_li_0_em_2_Template, 1, 0, "em", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", i_r1);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r2);
  }
}
function NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template(rf, ctx) {
}
var _c4 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzListComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r9.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, item_r10, index_r11));
  }
}
function NzListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzListComponent_ng_template_0_ng_container_1_Template, 2, 5, "ng-container", 8);
    ɵɵprojection(2, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.nzDataSource);
  }
}
function NzListComponent_nz_list_header_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r13.nzHeader);
  }
}
function NzListComponent_nz_list_header_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-header");
    ɵɵtemplate(1, NzListComponent_nz_list_header_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzHeader);
  }
}
function NzListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    ɵɵstyleProp("min-height", 53, "px");
  }
}
function NzListComponent_div_7_div_1_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, NzListComponent_div_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("nzSpan", ctx_r14.nzGrid.span || null)("nzXs", ctx_r14.nzGrid.xs || null)("nzSm", ctx_r14.nzGrid.sm || null)("nzMd", ctx_r14.nzGrid.md || null)("nzLg", ctx_r14.nzGrid.lg || null)("nzXl", ctx_r14.nzGrid.xl || null)("nzXXl", ctx_r14.nzGrid.xxl || null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r14.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c4, item_r15, index_r16));
  }
}
function NzListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, NzListComponent_div_7_div_1_Template, 2, 12, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("nzGutter", ctx_r4.nzGrid.gutter || null);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r4.nzDataSource);
  }
}
function NzListComponent_nz_list_empty_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-list-empty", 14);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("nzNoResult", ctx_r5.nzNoResult);
  }
}
function NzListComponent_nz_list_footer_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r18.nzFooter);
  }
}
function NzListComponent_nz_list_footer_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-footer");
    ɵɵtemplate(1, NzListComponent_nz_list_footer_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r6.nzFooter);
  }
}
function NzListComponent_ng_template_11_Template(rf, ctx) {
}
function NzListComponent_nz_list_pagination_13_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_nz_list_pagination_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-pagination");
    ɵɵtemplate(1, NzListComponent_nz_list_pagination_13_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r8.nzPagination);
  }
}
var _c5 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
var _c6 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];
function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 6);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("nzActions", ctx_r9.nzActions);
  }
}
function NzListItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_ng_template_0_ul_0_Template, 1, 1, "ul", 5);
    ɵɵprojection(1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.nzActions && ctx_r0.nzActions.length > 0);
  }
}
function NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r11.nzContent);
  }
}
function NzListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r10.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
    ɵɵprojection(1, 2);
    ɵɵtemplate(2, NzListItemComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.nzContent);
  }
}
function NzListItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
function NzListItemComponent_ng_template_6_ng_template_0_Template(rf, ctx) {
}
function NzListItemComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_ng_template_6_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_ng_template_6_ng_template_3_Template(rf, ctx) {
}
function NzListItemComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 9)(1, NzListItemComponent_ng_template_6_ng_template_1_Template, 0, 0, "ng-template", 9)(2, NzListItemComponent_ng_template_6_ng_template_2_Template, 0, 0, "ng-template", 9)(3, NzListItemComponent_ng_template_6_ng_template_3_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    const _r5 = ɵɵreference(5);
    const _r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.nzExtra);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function NzListItemComponent_ng_container_8_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_ng_container_8_ng_template_3_Template(rf, ctx) {
}
function NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-extra");
    ɵɵtemplate(1, NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r18.nzExtra);
  }
}
function NzListItemComponent_ng_container_8_ng_template_5_Template(rf, ctx) {
}
function NzListItemComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, NzListItemComponent_ng_container_8_ng_template_2_Template, 0, 0, "ng-template", 9)(3, NzListItemComponent_ng_container_8_ng_template_3_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
    ɵɵtemplate(4, NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template, 2, 1, "nz-list-item-extra", 7)(5, NzListItemComponent_ng_container_8_ng_template_5_Template, 0, 0, "ng-template", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    const _r1 = ɵɵreference(1);
    const _r5 = ɵɵreference(5);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.nzExtra);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
var _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
var _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
var _NzListItemMetaTitleComponent = class _NzListItemMetaTitleComponent {
};
_NzListItemMetaTitleComponent.ɵfac = function NzListItemMetaTitleComponent_Factory(t) {
  return new (t || _NzListItemMetaTitleComponent)();
};
_NzListItemMetaTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemMetaTitleComponent,
  selectors: [["nz-list-item-meta-title"]],
  exportAs: ["nzListItemMetaTitle"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-list-item-meta-title"]],
  template: function NzListItemMetaTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "h4", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaTitleComponent = _NzListItemMetaTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaTitleComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-title",
      exportAs: "nzListItemMetaTitle",
      template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var _NzListItemMetaDescriptionComponent = class _NzListItemMetaDescriptionComponent {
};
_NzListItemMetaDescriptionComponent.ɵfac = function NzListItemMetaDescriptionComponent_Factory(t) {
  return new (t || _NzListItemMetaDescriptionComponent)();
};
_NzListItemMetaDescriptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemMetaDescriptionComponent,
  selectors: [["nz-list-item-meta-description"]],
  exportAs: ["nzListItemMetaDescription"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-list-item-meta-description"]],
  template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaDescriptionComponent = _NzListItemMetaDescriptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-description",
      exportAs: "nzListItemMetaDescription",
      template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var _NzListItemMetaAvatarComponent = class _NzListItemMetaAvatarComponent {
};
_NzListItemMetaAvatarComponent.ɵfac = function NzListItemMetaAvatarComponent_Factory(t) {
  return new (t || _NzListItemMetaAvatarComponent)();
};
_NzListItemMetaAvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemMetaAvatarComponent,
  selectors: [["nz-list-item-meta-avatar"]],
  inputs: {
    nzSrc: "nzSrc"
  },
  exportAs: ["nzListItemMetaAvatar"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]],
  template: function NzListItemMetaAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzListItemMetaAvatarComponent_nz_avatar_1_Template, 1, 1, "nz-avatar", 1)(2, NzListItemMetaAvatarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzSrc);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.nzSrc);
    }
  },
  dependencies: [NzAvatarModule, NzAvatarComponent, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaAvatarComponent = _NzListItemMetaAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-avatar",
      exportAs: "nzListItemMetaAvatar",
      template: `
    <div class="ant-list-item-meta-avatar">
      <nz-avatar *ngIf="nzSrc" [nzSrc]="nzSrc"></nz-avatar>
      <ng-content *ngIf="!nzSrc"></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzAvatarModule, NgIf],
      standalone: true
    }]
  }], null, {
    nzSrc: [{
      type: Input
    }]
  });
})();
var _NzListItemMetaComponent = class _NzListItemMetaComponent {
  set nzAvatar(value) {
    if (value instanceof TemplateRef) {
      this.avatarStr = "";
      this.avatarTpl = value;
    } else {
      this.avatarStr = value;
    }
  }
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.avatarStr = "";
  }
};
_NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) {
  return new (t || _NzListItemMetaComponent)(ɵɵdirectiveInject(ElementRef));
};
_NzListItemMetaComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemMetaComponent,
  selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
  contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzListItemMetaDescriptionComponent, 5);
      ɵɵcontentQuery(dirIndex, NzListItemMetaTitleComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.descriptionComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-list-item-meta"],
  inputs: {
    nzAvatar: "nzAvatar",
    nzTitle: "nzTitle",
    nzDescription: "nzDescription"
  },
  exportAs: ["nzListItemMeta"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 3,
  consts: [[3, "nzSrc", 4, "ngIf"], [4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [3, "nzSrc"], [3, "ngTemplateOutlet"], [1, "ant-list-item-meta-content"], [4, "nzStringTemplateOutlet"]],
  template: function NzListItemMetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵtemplate(0, NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template, 1, 1, "nz-list-item-meta-avatar", 0)(1, NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template, 2, 1, "nz-list-item-meta-avatar", 1);
      ɵɵprojection(2);
      ɵɵtemplate(3, NzListItemMetaComponent_div_3_Template, 5, 2, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.avatarStr);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.avatarTpl);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent);
    }
  },
  dependencies: [NzListItemMetaAvatarComponent, NgIf, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzStringTemplateOutletDirective, NzListItemMetaDescriptionComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaComponent = _NzListItemMetaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta, [nz-list-item-meta]",
      exportAs: "nzListItemMeta",
      template: `
    <!--Old API Start-->
    <nz-list-item-meta-avatar *ngIf="avatarStr" [nzSrc]="avatarStr"></nz-list-item-meta-avatar>
    <nz-list-item-meta-avatar *ngIf="avatarTpl">
      <ng-container [ngTemplateOutlet]="avatarTpl"></ng-container>
    </nz-list-item-meta-avatar>
    <!--Old API End-->

    <ng-content select="nz-list-item-meta-avatar"></ng-content>

    <div *ngIf="nzTitle || nzDescription || descriptionComponent || titleComponent" class="ant-list-item-meta-content">
      <!--Old API Start-->
      <nz-list-item-meta-title *ngIf="nzTitle && !titleComponent">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </nz-list-item-meta-title>
      <nz-list-item-meta-description *ngIf="nzDescription && !descriptionComponent">
        <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
      </nz-list-item-meta-description>
      <!--Old API End-->

      <ng-content select="nz-list-item-meta-title"></ng-content>
      <ng-content select="nz-list-item-meta-description"></ng-content>
    </div>
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-list-item-meta"
      },
      imports: [NzListItemMetaAvatarComponent, NgIf, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzListItemMetaDescriptionComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    nzAvatar: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    descriptionComponent: [{
      type: ContentChild,
      args: [NzListItemMetaDescriptionComponent]
    }],
    titleComponent: [{
      type: ContentChild,
      args: [NzListItemMetaTitleComponent]
    }]
  });
})();
var _NzListItemExtraComponent = class _NzListItemExtraComponent {
};
_NzListItemExtraComponent.ɵfac = function NzListItemExtraComponent_Factory(t) {
  return new (t || _NzListItemExtraComponent)();
};
_NzListItemExtraComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemExtraComponent,
  selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]],
  hostAttrs: [1, "ant-list-item-extra"],
  exportAs: ["nzListItemExtra"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListItemExtraComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemExtraComponent = _NzListItemExtraComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemExtraComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-extra, [nz-list-item-extra]",
      exportAs: "nzListItemExtra",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-item-extra"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListItemActionComponent = class _NzListItemActionComponent {
};
_NzListItemActionComponent.ɵfac = function NzListItemActionComponent_Factory(t) {
  return new (t || _NzListItemActionComponent)();
};
_NzListItemActionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemActionComponent,
  selectors: [["nz-list-item-action"]],
  viewQuery: function NzListItemActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  exportAs: ["nzListItemAction"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListItemActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemActionComponent = _NzListItemActionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-action",
      exportAs: "nzListItemAction",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template><ng-content></ng-content></ng-template> `,
      standalone: true
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var _NzListItemActionsComponent = class _NzListItemActionsComponent {
  constructor(ngZone, cdr, destroy$) {
    this.ngZone = ngZone;
    this.nzActions = [];
    this.actions = [];
    this.inputActionChanges$ = new Subject();
    this.contentChildrenChanges$ = defer(() => {
      if (this.nzListItemActions) {
        return of(null);
      }
      return this.ngZone.onStable.pipe(take(1), this.enterZone(), exhaustMap(() => this.nzListItemActions.changes.pipe(startWith(this.nzListItemActions))));
    });
    merge(this.contentChildrenChanges$, this.inputActionChanges$).pipe(takeUntil(destroy$)).subscribe(() => {
      if (this.nzActions.length) {
        this.actions = this.nzActions;
      } else {
        this.actions = this.nzListItemActions.map((action) => action.templateRef);
      }
      cdr.detectChanges();
    });
  }
  ngOnChanges() {
    this.inputActionChanges$.next(null);
  }
  enterZone() {
    return (source) => new Observable((observer) => source.subscribe({
      next: (value) => this.ngZone.run(() => observer.next(value))
    }));
  }
};
_NzListItemActionsComponent.ɵfac = function NzListItemActionsComponent_Factory(t) {
  return new (t || _NzListItemActionsComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService));
};
_NzListItemActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemActionsComponent,
  selectors: [["ul", "nz-list-item-actions", ""]],
  contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzListItemActionComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
    }
  },
  hostAttrs: [1, "ant-list-item-action"],
  inputs: {
    nzActions: "nzActions"
  },
  exportAs: ["nzListItemActions"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c3,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]],
  template: function NzListItemActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.actions);
    }
  },
  dependencies: [NgForOf, NgTemplateOutlet, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemActionsComponent = _NzListItemActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionsComponent, [{
    type: Component,
    args: [{
      selector: "ul[nz-list-item-actions]",
      exportAs: "nzListItemActions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <li *ngFor="let i of actions; let last = last">
      <ng-template [ngTemplateOutlet]="i"></ng-template>
      <em *ngIf="!last" class="ant-list-item-action-split"></em>
    </li>
  `,
      host: {
        class: "ant-list-item-action"
      },
      providers: [NzDestroyService],
      imports: [NgForOf, NgTemplateOutlet, NgIf],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }], {
    nzActions: [{
      type: Input
    }],
    nzListItemActions: [{
      type: ContentChildren,
      args: [NzListItemActionComponent]
    }]
  });
})();
var _NzListEmptyComponent = class _NzListEmptyComponent {
};
_NzListEmptyComponent.ɵfac = function NzListEmptyComponent_Factory(t) {
  return new (t || _NzListEmptyComponent)();
};
_NzListEmptyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListEmptyComponent,
  selectors: [["nz-list-empty"]],
  hostAttrs: [1, "ant-list-empty-text"],
  inputs: {
    nzNoResult: "nzNoResult"
  },
  exportAs: ["nzListHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 2,
  consts: [[3, "nzComponentName", "specificContent"]],
  template: function NzListEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "nz-embed-empty", 0);
    }
    if (rf & 2) {
      ɵɵproperty("nzComponentName", "list")("specificContent", ctx.nzNoResult);
    }
  },
  dependencies: [NzEmptyModule, NzEmbedEmptyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListEmptyComponent = _NzListEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListEmptyComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-empty",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty> `,
      host: {
        class: "ant-list-empty-text"
      },
      imports: [NzEmptyModule],
      standalone: true
    }]
  }], null, {
    nzNoResult: [{
      type: Input
    }]
  });
})();
var _NzListHeaderComponent = class _NzListHeaderComponent {
};
_NzListHeaderComponent.ɵfac = function NzListHeaderComponent_Factory(t) {
  return new (t || _NzListHeaderComponent)();
};
_NzListHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListHeaderComponent,
  selectors: [["nz-list-header"]],
  hostAttrs: [1, "ant-list-header"],
  exportAs: ["nzListHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListHeaderComponent = _NzListHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-header",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-header"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListFooterComponent = class _NzListFooterComponent {
};
_NzListFooterComponent.ɵfac = function NzListFooterComponent_Factory(t) {
  return new (t || _NzListFooterComponent)();
};
_NzListFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListFooterComponent,
  selectors: [["nz-list-footer"]],
  hostAttrs: [1, "ant-list-footer"],
  exportAs: ["nzListFooter"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListFooterComponent = _NzListFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-footer",
      exportAs: "nzListFooter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-footer"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListPaginationComponent = class _NzListPaginationComponent {
};
_NzListPaginationComponent.ɵfac = function NzListPaginationComponent_Factory(t) {
  return new (t || _NzListPaginationComponent)();
};
_NzListPaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListPaginationComponent,
  selectors: [["nz-list-pagination"]],
  hostAttrs: [1, "ant-list-pagination"],
  exportAs: ["nzListPagination"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListPaginationComponent = _NzListPaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-pagination",
      exportAs: "nzListPagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-pagination"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListLoadMoreDirective = class _NzListLoadMoreDirective {
};
_NzListLoadMoreDirective.ɵfac = function NzListLoadMoreDirective_Factory(t) {
  return new (t || _NzListLoadMoreDirective)();
};
_NzListLoadMoreDirective.ɵdir = ɵɵdefineDirective({
  type: _NzListLoadMoreDirective,
  selectors: [["nz-list-load-more"]],
  exportAs: ["nzListLoadMoreDirective"],
  standalone: true
});
var NzListLoadMoreDirective = _NzListLoadMoreDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListLoadMoreDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list-load-more",
      exportAs: "nzListLoadMoreDirective",
      standalone: true
    }]
  }], null, null);
})();
var _NzListGridDirective = class _NzListGridDirective {
};
_NzListGridDirective.ɵfac = function NzListGridDirective_Factory(t) {
  return new (t || _NzListGridDirective)();
};
_NzListGridDirective.ɵdir = ɵɵdefineDirective({
  type: _NzListGridDirective,
  selectors: [["nz-list", "nzGrid", ""]],
  hostAttrs: [1, "ant-list-grid"],
  standalone: true
});
var NzListGridDirective = _NzListGridDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListGridDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list[nzGrid]",
      host: {
        class: "ant-list-grid"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListComponent = class _NzListComponent {
  get itemLayoutNotify$() {
    return this.itemLayoutNotifySource.asObservable();
  }
  constructor(directionality) {
    this.directionality = directionality;
    this.nzBordered = false;
    this.nzGrid = "";
    this.nzItemLayout = "horizontal";
    this.nzRenderItem = null;
    this.nzLoading = false;
    this.nzLoadMore = null;
    this.nzSize = "default";
    this.nzSplit = true;
    this.hasSomethingAfterLastItem = false;
    this.dir = "ltr";
    this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  getSomethingAfterLastItem() {
    return !!(this.nzLoadMore || this.nzPagination || this.nzFooter || this.nzListFooterComponent || this.nzListPaginationComponent || this.nzListLoadMoreDirective);
  }
  ngOnChanges(changes) {
    if (changes.nzItemLayout) {
      this.itemLayoutNotifySource.next(this.nzItemLayout);
    }
  }
  ngOnDestroy() {
    this.itemLayoutNotifySource.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngAfterContentInit() {
    this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
  }
};
_NzListComponent.ɵfac = function NzListComponent_Factory(t) {
  return new (t || _NzListComponent)(ɵɵdirectiveInject(Directionality, 8));
};
_NzListComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListComponent,
  selectors: [["nz-list"], ["", "nz-list", ""]],
  contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzListFooterComponent, 5);
      ɵɵcontentQuery(dirIndex, NzListPaginationComponent, 5);
      ɵɵcontentQuery(dirIndex, NzListLoadMoreDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListFooterComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListPaginationComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListLoadMoreDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-list"],
  hostVars: 16,
  hostBindings: function NzListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
    }
  },
  inputs: {
    nzDataSource: "nzDataSource",
    nzBordered: "nzBordered",
    nzGrid: "nzGrid",
    nzHeader: "nzHeader",
    nzFooter: "nzFooter",
    nzItemLayout: "nzItemLayout",
    nzRenderItem: "nzRenderItem",
    nzLoading: "nzLoading",
    nzLoadMore: "nzLoadMore",
    nzPagination: "nzPagination",
    nzSize: "nzSize",
    nzSplit: "nzSplit",
    nzNoResult: "nzNoResult"
  },
  exportAs: ["nzList"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c6,
  decls: 15,
  vars: 9,
  consts: [["itemsTpl", ""], [4, "ngIf"], [3, "nzSpinning"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], [3, "nzNoResult", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "nzStringTemplateOutlet"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "nzNoResult"]],
  template: function NzListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c5);
      ɵɵtemplate(0, NzListComponent_ng_template_0_Template, 3, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzListComponent_nz_list_header_2_Template, 2, 1, "nz-list-header", 1);
      ɵɵprojection(3);
      ɵɵelementStart(4, "nz-spin", 2);
      ɵɵelementContainerStart(5);
      ɵɵtemplate(6, NzListComponent_div_6_Template, 1, 2, "div", 3)(7, NzListComponent_div_7_Template, 2, 2, "div", 4)(8, NzListComponent_nz_list_empty_8_Template, 1, 1, "nz-list-empty", 5);
      ɵɵelementContainerEnd();
      ɵɵelementEnd();
      ɵɵtemplate(9, NzListComponent_nz_list_footer_9_Template, 2, 1, "nz-list-footer", 1);
      ɵɵprojection(10, 1);
      ɵɵtemplate(11, NzListComponent_ng_template_11_Template, 0, 0, "ng-template", 6);
      ɵɵprojection(12, 2);
      ɵɵtemplate(13, NzListComponent_nz_list_pagination_13_Template, 2, 1, "nz-list-pagination", 1);
      ɵɵprojection(14, 3);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzHeader);
      ɵɵadvance(2);
      ɵɵproperty("nzSpinning", ctx.nzLoading);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzGrid && ctx.nzDataSource)("ngIfElse", _r1);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzFooter);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzPagination);
    }
  },
  dependencies: [NgTemplateOutlet, NgForOf, NzListHeaderComponent, NgIf, NzOutletModule, NzStringTemplateOutletDirective, NzSpinModule, NzSpinComponent, NzGridModule, NzColDirective, NzRowDirective, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListComponent = _NzListComponent;
__decorate([InputBoolean()], NzListComponent.prototype, "nzBordered", void 0);
__decorate([InputBoolean()], NzListComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzListComponent.prototype, "nzSplit", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListComponent, [{
    type: Component,
    args: [{
      selector: "nz-list, [nz-list]",
      exportAs: "nzList",
      template: `
    <ng-template #itemsTpl>
      <div class="ant-list-items">
        <ng-container *ngFor="let item of nzDataSource; let index = index">
          <ng-template
            [ngTemplateOutlet]="nzRenderItem"
            [ngTemplateOutletContext]="{ $implicit: item, index: index }"
          ></ng-template>
        </ng-container>
        <ng-content></ng-content>
      </div>
    </ng-template>

    <nz-list-header *ngIf="nzHeader">
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
    </nz-list-header>
    <ng-content select="nz-list-header"></ng-content>

    <nz-spin [nzSpinning]="nzLoading">
      <ng-container>
        <div *ngIf="nzLoading && nzDataSource && nzDataSource.length === 0" [style.min-height.px]="53"></div>
        <div *ngIf="nzGrid && nzDataSource; else itemsTpl" nz-row [nzGutter]="nzGrid.gutter || null">
          <div
            nz-col
            [nzSpan]="nzGrid.span || null"
            [nzXs]="nzGrid.xs || null"
            [nzSm]="nzGrid.sm || null"
            [nzMd]="nzGrid.md || null"
            [nzLg]="nzGrid.lg || null"
            [nzXl]="nzGrid.xl || null"
            [nzXXl]="nzGrid.xxl || null"
            *ngFor="let item of nzDataSource; let index = index"
          >
            <ng-template
              [ngTemplateOutlet]="nzRenderItem"
              [ngTemplateOutletContext]="{ $implicit: item, index: index }"
            ></ng-template>
          </div>
        </div>
        <nz-list-empty
          *ngIf="!nzLoading && nzDataSource && nzDataSource.length === 0"
          [nzNoResult]="nzNoResult"
        ></nz-list-empty>
      </ng-container>
    </nz-spin>

    <nz-list-footer *ngIf="nzFooter">
      <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
    </nz-list-footer>
    <ng-content select="nz-list-footer, [nz-list-footer]"></ng-content>

    <ng-template [ngTemplateOutlet]="nzLoadMore"></ng-template>
    <ng-content select="nz-list-load-more, [nz-list-load-more]"></ng-content>

    <nz-list-pagination *ngIf="nzPagination">
      <ng-template [ngTemplateOutlet]="nzPagination"></ng-template>
    </nz-list-pagination>
    <ng-content select="nz-list-pagination, [nz-list-pagination]"></ng-content>
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list",
        "[class.ant-list-rtl]": `dir === 'rtl'`,
        "[class.ant-list-vertical]": 'nzItemLayout === "vertical"',
        "[class.ant-list-lg]": 'nzSize === "large"',
        "[class.ant-list-sm]": 'nzSize === "small"',
        "[class.ant-list-split]": "nzSplit",
        "[class.ant-list-bordered]": "nzBordered",
        "[class.ant-list-loading]": "nzLoading",
        "[class.ant-list-something-after-last-item]": "hasSomethingAfterLastItem"
      },
      imports: [NgTemplateOutlet, NgForOf, NzListHeaderComponent, NgIf, NzOutletModule, NzSpinModule, NzGridModule, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzDataSource: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzGrid: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzItemLayout: [{
      type: Input
    }],
    nzRenderItem: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzLoadMore: [{
      type: Input
    }],
    nzPagination: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzSplit: [{
      type: Input
    }],
    nzNoResult: [{
      type: Input
    }],
    nzListFooterComponent: [{
      type: ContentChild,
      args: [NzListFooterComponent]
    }],
    nzListPaginationComponent: [{
      type: ContentChild,
      args: [NzListPaginationComponent]
    }],
    nzListLoadMoreDirective: [{
      type: ContentChild,
      args: [NzListLoadMoreDirective]
    }]
  });
})();
var _NzListItemComponent = class _NzListItemComponent {
  get isVerticalAndExtra() {
    return this.itemLayout === "vertical" && (!!this.listItemExtraDirective || !!this.nzExtra);
  }
  constructor(parentComp, cdr) {
    this.parentComp = parentComp;
    this.cdr = cdr;
    this.nzActions = [];
    this.nzExtra = null;
    this.nzNoFlex = false;
  }
  ngAfterViewInit() {
    this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((val) => {
      this.itemLayout = val;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    if (this.itemLayout$) {
      this.itemLayout$.unsubscribe();
    }
  }
};
_NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) {
  return new (t || _NzListItemComponent)(ɵɵdirectiveInject(NzListComponent), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzListItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzListItemComponent,
  selectors: [["nz-list-item"], ["", "nz-list-item", ""]],
  contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzListItemExtraComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listItemExtraDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-list-item"],
  hostVars: 2,
  hostBindings: function NzListItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
    }
  },
  inputs: {
    nzActions: "nzActions",
    nzContent: "nzContent",
    nzExtra: "nzExtra",
    nzNoFlex: "nzNoFlex"
  },
  exportAs: ["nzListItem"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c8,
  decls: 9,
  vars: 2,
  consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["nz-list-item-actions", "", 3, "nzActions", 4, "ngIf"], ["nz-list-item-actions", "", 3, "nzActions"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngTemplateOutlet"], [1, "ant-list-item-main"]],
  template: function NzListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c7);
      ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, NzListItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor)(8, NzListItemComponent_ng_container_8_Template, 6, 4, "ng-container", 4);
    }
    if (rf & 2) {
      const _r7 = ɵɵreference(7);
      ɵɵadvance(8);
      ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r7);
    }
  },
  dependencies: [NzListItemActionsComponent, NgIf, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet, NzListItemExtraComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemComponent = _NzListItemComponent;
__decorate([InputBoolean()], NzListItemComponent.prototype, "nzNoFlex", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item, [nz-list-item]",
      exportAs: "nzListItem",
      template: `
    <ng-template #actionsTpl>
      <ul nz-list-item-actions *ngIf="nzActions && nzActions.length > 0" [nzActions]="nzActions"></ul>
      <ng-content select="nz-list-item-actions, [nz-list-item-actions]"></ng-content>
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="nz-list-item-meta, [nz-list-item-meta]"></ng-content>
      <ng-content></ng-content>
      <ng-container *ngIf="nzContent">
        <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
      </ng-container>
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="nz-list-item-extra, [nz-list-item-extra]"></ng-content>
    </ng-template>
    <ng-template #simpleTpl>
      <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="nzExtra"></ng-template>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
    </ng-template>

    <ng-container *ngIf="isVerticalAndExtra; else simpleTpl">
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
        <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
      </div>
      <nz-list-item-extra *ngIf="nzExtra">
        <ng-template [ngTemplateOutlet]="nzExtra"></ng-template>
      </nz-list-item-extra>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
    </ng-container>
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list-item"
      },
      imports: [NzListItemActionsComponent, NgIf, NzOutletModule, NgTemplateOutlet, NzListItemExtraComponent],
      standalone: true
    }]
  }], () => [{
    type: NzListComponent
  }, {
    type: ChangeDetectorRef
  }], {
    nzActions: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzNoFlex: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ant-list-item-no-flex"]
    }],
    listItemExtraDirective: [{
      type: ContentChild,
      args: [NzListItemExtraComponent]
    }]
  });
})();
var DIRECTIVES = [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective];
var _NzListModule = class _NzListModule {
};
_NzListModule.ɵfac = function NzListModule_Factory(t) {
  return new (t || _NzListModule)();
};
_NzListModule.ɵmod = ɵɵdefineNgModule({
  type: _NzListModule,
  imports: [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective],
  exports: [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]
});
_NzListModule.ɵinj = ɵɵdefineInjector({
  imports: [NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaAvatarComponent]
});
var NzListModule = _NzListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListModule, [{
    type: NgModule,
    args: [{
      imports: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();
export {
  NzListComponent,
  NzListEmptyComponent,
  NzListFooterComponent,
  NzListGridDirective,
  NzListHeaderComponent,
  NzListItemActionComponent,
  NzListItemActionsComponent,
  NzListItemComponent,
  NzListItemExtraComponent,
  NzListItemMetaAvatarComponent,
  NzListItemMetaComponent,
  NzListItemMetaDescriptionComponent,
  NzListItemMetaTitleComponent,
  NzListLoadMoreDirective,
  NzListModule,
  NzListPaginationComponent
};
//# sourceMappingURL=ng-zorro-antd_list.js.map
