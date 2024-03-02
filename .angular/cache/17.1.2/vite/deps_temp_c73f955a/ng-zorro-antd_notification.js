import {
  NzMNComponent,
  NzMNContainerComponent,
  NzMNService
} from "./chunk-C7BA6PFH.js";
import {
  Overlay
} from "./chunk-GJGIYAJB.js";
import "./chunk-YLPDPQ3A.js";
import "./chunk-27BDGVS6.js";
import "./chunk-QQEJWKOS.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ALISFRN6.js";
import "./chunk-5QBFNWJX.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-KLWQZNTF.js";
import {
  notificationMotion
} from "./chunk-RD66SXZH.js";
import "./chunk-22WXYIL7.js";
import {
  NzSingletonService
} from "./chunk-UQD6WDPZ.js";
import "./chunk-3Z4XHAHP.js";
import "./chunk-PYRWNFBU.js";
import "./chunk-T2IM57ZC.js";
import "./chunk-OBII6L4R.js";
import {
  NzConfigService
} from "./chunk-J2CHXYUT.js";
import {
  toCssPixel
} from "./chunk-BGFQYVOV.js";
import "./chunk-OBJM4G4T.js";
import "./chunk-CUUEOFAA.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-XEMLBLQE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-LKJUCJSS.js";
import {
  Subject,
  takeUntil
} from "./chunk-JKR55PDT.js";
import {
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-notification.mjs
function NzNotificationComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
}
function NzNotificationComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
}
function NzNotificationComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
}
function NzNotificationComponent_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
}
function NzNotificationComponent_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r9.instance.title, ɵɵsanitizeHtml);
  }
}
function NzNotificationComponent_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r10.instance.content, ɵɵsanitizeHtml);
  }
}
function NzNotificationComponent_div_1_span_12_ng_template_1_Template(rf, ctx) {
}
var _c0 = (a0) => ({
  $implicit: a0
});
function NzNotificationComponent_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, NzNotificationComponent_div_1_span_12_ng_template_1_Template, 0, 0, "ng-template", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const btn_r12 = ctx.ngIf;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", btn_r12)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r11));
  }
}
function NzNotificationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7)(1, "div", 7)(2, "div");
    ɵɵelementContainerStart(3, 8);
    ɵɵtemplate(4, NzNotificationComponent_div_1_span_4_Template, 1, 0, "span", 9)(5, NzNotificationComponent_div_1_span_5_Template, 1, 0, "span", 10)(6, NzNotificationComponent_div_1_span_6_Template, 1, 0, "span", 11)(7, NzNotificationComponent_div_1_span_7_Template, 1, 0, "span", 12);
    ɵɵelementContainerEnd();
    ɵɵelementStart(8, "div", 13);
    ɵɵtemplate(9, NzNotificationComponent_div_1_ng_container_9_Template, 2, 1, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 15);
    ɵɵtemplate(11, NzNotificationComponent_div_1_ng_container_11_Template, 2, 1, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵtemplate(12, NzNotificationComponent_div_1_span_12_Template, 2, 4, "span", 16);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("ant-notification-notice-with-icon", ctx_r0.instance.type !== "blank");
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ctx_r0.instance.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "success");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "info");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "warning");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "error");
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.instance.title);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.instance.content);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.instance.options == null ? null : ctx_r0.instance.options.nzButton);
  }
}
function NzNotificationComponent_ng_template_2_Template(rf, ctx) {
}
function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const closeIcon_r15 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", closeIcon_r15);
  }
}
function NzNotificationComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.instance.options == null ? null : ctx_r2.instance.options.nzCloseIcon);
  }
}
function NzNotificationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 25);
  }
}
var _c1 = (a0, a1) => ({
  $implicit: a0,
  data: a1
});
function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_1_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r6 = ctx.$implicit;
    ɵɵproperty("instance", instance_r6)("placement", "topLeft");
  }
}
function NzNotificationContainerComponent_nz_notification_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_3_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r9 = ctx.$implicit;
    ɵɵproperty("instance", instance_r9)("placement", "topRight");
  }
}
function NzNotificationContainerComponent_nz_notification_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_5_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r12 = ctx.$implicit;
    ɵɵproperty("instance", instance_r12)("placement", "bottomLeft");
  }
}
function NzNotificationContainerComponent_nz_notification_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_7_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r15 = ctx.$implicit;
    ɵɵproperty("instance", instance_r15)("placement", "bottomRight");
  }
}
function NzNotificationContainerComponent_nz_notification_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_9_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r18 = ctx.$implicit;
    ɵɵproperty("instance", instance_r18)("placement", "top");
  }
}
function NzNotificationContainerComponent_nz_notification_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_11_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r21 = ctx.$implicit;
    ɵɵproperty("instance", instance_r21)("placement", "bottom");
  }
}
var _NzNotificationComponent = class _NzNotificationComponent extends NzMNComponent {
  constructor(cdr) {
    super(cdr);
    this.destroyed = new EventEmitter();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.instance.onClick.complete();
  }
  onClick(event) {
    this.instance.onClick.next(event);
  }
  close() {
    this.destroy(true);
  }
  get state() {
    if (this.instance.state === "enter") {
      switch (this.placement) {
        case "topLeft":
        case "bottomLeft":
          return "enterLeft";
        case "topRight":
        case "bottomRight":
          return "enterRight";
        case "top":
          return "enterTop";
        case "bottom":
          return "enterBottom";
        default:
          return "enterRight";
      }
    } else {
      return this.instance.state;
    }
  }
};
_NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) {
  return new (t || _NzNotificationComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzNotificationComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzNotificationComponent,
  selectors: [["nz-notification"]],
  inputs: {
    instance: "instance",
    index: "index",
    placement: "placement"
  },
  outputs: {
    destroyed: "destroyed"
  },
  exportAs: ["nzNotification"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 8,
  vars: 12,
  consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "click", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], [4, "ngIf", "ngIfElse"], ["iconTpl", ""], [1, "ant-notification-notice-content"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message"], [4, "nzStringTemplateOutlet"], [1, "ant-notification-notice-description"], ["class", "ant-notification-notice-btn", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [3, "innerHTML"], [1, "ant-notification-notice-btn"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"]],
  template: function NzNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("@notificationMotion.done", function NzNotificationComponent_Template_div_animation_notificationMotion_done_0_listener($event) {
        return ctx.animationStateChanged.next($event);
      })("click", function NzNotificationComponent_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      })("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener() {
        return ctx.onEnter();
      })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener() {
        return ctx.onLeave();
      });
      ɵɵtemplate(1, NzNotificationComponent_div_1_Template, 13, 10, "div", 1)(2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
      ɵɵelementStart(3, "a", 3);
      ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener() {
        return ctx.close();
      });
      ɵɵelementStart(4, "span", 4);
      ɵɵtemplate(5, NzNotificationComponent_ng_container_5_Template, 2, 1, "ng-container", 5)(6, NzNotificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      const _r4 = ɵɵreference(7);
      ɵɵproperty("ngStyle", (ctx.instance.options == null ? null : ctx.instance.options.nzStyle) || null)("ngClass", (ctx.instance.options == null ? null : ctx.instance.options.nzClass) || "")("@notificationMotion", ctx.state);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.instance.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.instance.template)("ngTemplateOutlet", ctx.instance.template)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c1, ctx, ctx.instance.options == null ? null : ctx.instance.options.nzData));
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.instance.options == null ? null : ctx.instance.options.nzCloseIcon)("ngIfElse", _r4);
    }
  },
  dependencies: [NgStyle, NgClass, NgIf, NgSwitch, NgSwitchCase, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [notificationMotion]
  }
});
var NzNotificationComponent = _NzNotificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-notification",
      exportAs: "nzNotification",
      preserveWhitespaces: false,
      animations: [notificationMotion],
      template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [ngStyle]="instance.options?.nzStyle || null"
      [ngClass]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (@notificationMotion.done)="animationStateChanged.next($event)"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div *ngIf="!instance.template" class="ant-notification-notice-content">
        <div class="ant-notification-notice-content">
          <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
            <ng-container [ngSwitch]="instance.type">
              <span
                *ngSwitchCase="'success'"
                nz-icon
                nzType="check-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-success"
              ></span>
              <span
                *ngSwitchCase="'info'"
                nz-icon
                nzType="info-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-info"
              ></span>
              <span
                *ngSwitchCase="'warning'"
                nz-icon
                nzType="exclamation-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-warning"
              ></span>
              <span
                *ngSwitchCase="'error'"
                nz-icon
                nzType="close-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-error"
              ></span>
            </ng-container>
            <div class="ant-notification-notice-message">
              <ng-container *nzStringTemplateOutlet="instance.title">
                <div [innerHTML]="instance.title"></div>
              </ng-container>
            </div>
            <div class="ant-notification-notice-description">
              <ng-container *nzStringTemplateOutlet="instance.content">
                <div [innerHTML]="instance.content"></div>
              </ng-container>
            </div>
            <span *ngIf="instance.options?.nzButton as btn" class="ant-notification-notice-btn">
              <ng-template [ngTemplateOutlet]="btn" [ngTemplateOutletContext]="{ $implicit: this }"></ng-template>
            </span>
          </div>
        </div>
      </div>
      <ng-template
        [ngIf]="instance.template"
        [ngTemplateOutlet]="instance.template!"
        [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
      ></ng-template>
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          <ng-container *ngIf="instance.options?.nzCloseIcon; else iconTpl">
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <span nz-icon [nzType]="closeIcon"></span>
            </ng-container>
          </ng-container>
          <ng-template #iconTpl>
            <span nz-icon nzType="close" class="ant-notification-close-icon"></span>
          </ng-template>
        </span>
      </a>
    </div>
  `,
      imports: [NgStyle, NgClass, NgIf, NgSwitch, NgSwitchCase, NzIconModule, NzOutletModule, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    instance: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    destroyed: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "notification";
var NZ_NOTIFICATION_DEFAULT_CONFIG = {
  nzTop: "24px",
  nzBottom: "24px",
  nzPlacement: "topRight",
  nzDuration: 4500,
  nzMaxStack: 7,
  nzPauseOnHover: true,
  nzAnimate: true,
  nzDirection: "ltr"
};
var _NzNotificationContainerComponent = class _NzNotificationContainerComponent extends NzMNContainerComponent {
  constructor(cdr, nzConfigService) {
    super(cdr, nzConfigService);
    this.dir = "ltr";
    this.instances = [];
    this.topLeftInstances = [];
    this.topRightInstances = [];
    this.bottomLeftInstances = [];
    this.bottomRightInstances = [];
    this.topInstances = [];
    this.bottomInstances = [];
    const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
    this.dir = config?.nzDirection || "ltr";
  }
  create(notification) {
    const noti = this.onCreate(notification);
    const key = noti.options.nzKey;
    const notificationWithSameKey = this.instances.find((msg) => msg.options.nzKey === notification.options.nzKey);
    if (key && notificationWithSameKey) {
      this.replaceNotification(notificationWithSameKey, noti);
    } else {
      if (this.instances.length >= this.config.nzMaxStack) {
        this.instances = this.instances.slice(1);
      }
      this.instances = [...this.instances, noti];
    }
    this.readyInstances();
    return noti;
  }
  onCreate(instance) {
    instance.options = this.mergeOptions(instance.options);
    instance.onClose = new Subject();
    instance.onClick = new Subject();
    return instance;
  }
  subscribeConfigChange() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateConfig();
      const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
      if (config) {
        const {
          nzDirection
        } = config;
        this.dir = nzDirection || this.dir;
      }
    });
  }
  updateConfig() {
    this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME));
    this.top = toCssPixel(this.config.nzTop);
    this.bottom = toCssPixel(this.config.nzBottom);
    this.cdr.markForCheck();
  }
  replaceNotification(old, _new) {
    old.title = _new.title;
    old.content = _new.content;
    old.template = _new.template;
    old.type = _new.type;
    old.options = _new.options;
  }
  readyInstances() {
    const instancesMap = {
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
      top: [],
      bottom: []
    };
    this.instances.forEach((m) => {
      const placement = m.options.nzPlacement;
      switch (placement) {
        case "topLeft":
          instancesMap.topLeft.push(m);
          break;
        case "topRight":
          instancesMap.topRight.push(m);
          break;
        case "bottomLeft":
          instancesMap.bottomLeft.push(m);
          break;
        case "bottomRight":
          instancesMap.bottomRight.push(m);
          break;
        case "top":
          instancesMap.top.push(m);
          break;
        case "bottom":
          instancesMap.bottom.push(m);
          break;
        default:
          instancesMap.topRight.push(m);
      }
    });
    this.topLeftInstances = instancesMap.topLeft;
    this.topRightInstances = instancesMap.topRight;
    this.bottomLeftInstances = instancesMap.bottomLeft;
    this.bottomRightInstances = instancesMap.bottomRight;
    this.topInstances = instancesMap.top;
    this.bottomInstances = instancesMap.bottom;
    this.cdr.detectChanges();
  }
  mergeOptions(options) {
    const {
      nzDuration,
      nzAnimate,
      nzPauseOnHover,
      nzPlacement
    } = this.config;
    return __spreadValues({
      nzDuration,
      nzAnimate,
      nzPauseOnHover,
      nzPlacement
    }, options);
  }
};
_NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) {
  return new (t || _NzNotificationContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService));
};
_NzNotificationContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzNotificationContainerComponent,
  selectors: [["nz-notification-container"]],
  exportAs: ["nzNotificationContainer"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 46,
  consts: [[1, "ant-notification", "ant-notification-topLeft"], [3, "instance", "placement", "destroyed", 4, "ngFor", "ngForOf"], [1, "ant-notification", "ant-notification-topRight"], [1, "ant-notification", "ant-notification-bottomLeft"], [1, "ant-notification", "ant-notification-bottomRight"], [1, "ant-notification", "ant-notification-top"], [1, "ant-notification", "ant-notification-bottom"], [3, "instance", "placement", "destroyed"]],
  template: function NzNotificationContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, NzNotificationContainerComponent_nz_notification_3_Template, 1, 2, "nz-notification", 1);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 3);
      ɵɵtemplate(5, NzNotificationContainerComponent_nz_notification_5_Template, 1, 2, "nz-notification", 1);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 4);
      ɵɵtemplate(7, NzNotificationContainerComponent_nz_notification_7_Template, 1, 2, "nz-notification", 1);
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 5);
      ɵɵtemplate(9, NzNotificationContainerComponent_nz_notification_9_Template, 1, 2, "nz-notification", 1);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 6);
      ɵɵtemplate(11, NzNotificationContainerComponent_nz_notification_11_Template, 1, 2, "nz-notification", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("top", ctx.top)("left", "0px");
      ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.topLeftInstances);
      ɵɵadvance();
      ɵɵstyleProp("top", ctx.top)("right", "0px");
      ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.topRightInstances);
      ɵɵadvance();
      ɵɵstyleProp("bottom", ctx.bottom)("left", "0px");
      ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.bottomLeftInstances);
      ɵɵadvance();
      ɵɵstyleProp("bottom", ctx.bottom)("right", "0px");
      ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.bottomRightInstances);
      ɵɵadvance();
      ɵɵstyleProp("top", ctx.top)("left", "50%")("transform", "translateX(-50%)");
      ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.topInstances);
      ɵɵadvance();
      ɵɵstyleProp("bottom", ctx.bottom)("left", "50%")("transform", "translateX(-50%)");
      ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.bottomInstances);
    }
  },
  dependencies: [NzNotificationComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzNotificationContainerComponent = _NzNotificationContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationContainerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-notification-container",
      exportAs: "nzNotificationContainer",
      preserveWhitespaces: false,
      template: `
    <div
      class="ant-notification ant-notification-topLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of topLeftInstances"
        [instance]="instance"
        [placement]="'topLeft'"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.right]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of topRightInstances"
        [instance]="instance"
        [placement]="'topRight'"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottomLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of bottomLeftInstances"
        [instance]="instance"
        [placement]="'bottomLeft'"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottomRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.right]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of bottomRightInstances"
        [instance]="instance"
        [placement]="'bottomRight'"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-top"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      <nz-notification
        *ngFor="let instance of topInstances"
        [instance]="instance"
        [placement]="'top'"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottom"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      <nz-notification
        *ngFor="let instance of bottomInstances"
        [instance]="instance"
        [placement]="'bottom'"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
  `,
      imports: [NzNotificationComponent, NgForOf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }], null);
})();
var _NzNotificationModule = class _NzNotificationModule {
};
_NzNotificationModule.ɵfac = function NzNotificationModule_Factory(t) {
  return new (t || _NzNotificationModule)();
};
_NzNotificationModule.ɵmod = ɵɵdefineNgModule({
  type: _NzNotificationModule,
  imports: [NzNotificationComponent, NzNotificationContainerComponent]
});
_NzNotificationModule.ɵinj = ɵɵdefineInjector({
  imports: [NzNotificationComponent, NzNotificationContainerComponent]
});
var NzNotificationModule = _NzNotificationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationModule, [{
    type: NgModule,
    args: [{
      imports: [NzNotificationComponent, NzNotificationContainerComponent]
    }]
  }], null, null);
})();
var notificationId = 0;
var _NzNotificationService = class _NzNotificationService extends NzMNService {
  constructor(nzSingletonService, overlay, injector) {
    super(nzSingletonService, overlay, injector);
    this.componentPrefix = "notification-";
  }
  success(title, content, options) {
    return this.create("success", title, content, options);
  }
  error(title, content, options) {
    return this.create("error", title, content, options);
  }
  info(title, content, options) {
    return this.create("info", title, content, options);
  }
  warning(title, content, options) {
    return this.create("warning", title, content, options);
  }
  blank(title, content, options) {
    return this.create("blank", title, content, options);
  }
  create(type, title, content, options) {
    return this.createInstance({
      type,
      title,
      content
    }, options);
  }
  template(template, options) {
    return this.createInstance({
      template
    }, options);
  }
  generateMessageId() {
    return `${this.componentPrefix}-${notificationId++}`;
  }
  createInstance(message, options) {
    this.container = this.withContainer(NzNotificationContainerComponent);
    return this.container.create(__spreadValues(__spreadValues({}, message), {
      createdAt: /* @__PURE__ */ new Date(),
      messageId: options?.nzKey || this.generateMessageId(),
      options
    }));
  }
};
_NzNotificationService.ɵfac = function NzNotificationService_Factory(t) {
  return new (t || _NzNotificationService)(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(Injector));
};
_NzNotificationService.ɵprov = ɵɵdefineInjectable({
  token: _NzNotificationService,
  factory: _NzNotificationService.ɵfac,
  providedIn: "root"
});
var NzNotificationService = _NzNotificationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzSingletonService
  }, {
    type: Overlay
  }, {
    type: Injector
  }], null);
})();
var _NzNotificationServiceModule = class _NzNotificationServiceModule {
};
_NzNotificationServiceModule.ɵfac = function NzNotificationServiceModule_Factory(t) {
  return new (t || _NzNotificationServiceModule)();
};
_NzNotificationServiceModule.ɵmod = ɵɵdefineNgModule({
  type: _NzNotificationServiceModule
});
_NzNotificationServiceModule.ɵinj = ɵɵdefineInjector({});
var NzNotificationServiceModule = _NzNotificationServiceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationServiceModule, [{
    type: NgModule
  }], null, null);
})();
export {
  NzNotificationComponent,
  NzNotificationContainerComponent,
  NzNotificationModule,
  NzNotificationService,
  NzNotificationServiceModule
};
//# sourceMappingURL=ng-zorro-antd_notification.js.map
