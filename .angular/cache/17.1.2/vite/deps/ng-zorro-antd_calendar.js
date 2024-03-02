import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-P4XYQGDK.js";
import {
  NzRadioButtonDirective,
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-YRC6PU6V.js";
import {
  DateTableComponent,
  LibPackerModule,
  MonthTableComponent
} from "./chunk-D7TXUR2U.js";
import "./chunk-O44XS6HU.js";
import "./chunk-EQ42YAL5.js";
import {
  DateHelperService,
  NzI18nService
} from "./chunk-4P5ULAOO.js";
import {
  CandyDate
} from "./chunk-JYW4U277.js";
import "./chunk-JRFJGI6G.js";
import "./chunk-O5GLPPQB.js";
import "./chunk-EWCSBHUX.js";
import "./chunk-TLUWXRYA.js";
import "./chunk-VYCHAW63.js";
import "./chunk-7BO5IFVX.js";
import "./chunk-S3UWNRLX.js";
import "./chunk-ZE7OTD5F.js";
import "./chunk-NY6JAOWP.js";
import "./chunk-27BDGVS6.js";
import "./chunk-QZDSSLFT.js";
import "./chunk-Y2EMHX43.js";
import "./chunk-S7DTU7BM.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-YOOKZTZK.js";
import "./chunk-BTWL4DJ5.js";
import "./chunk-NYNOJRHU.js";
import "./chunk-I5N7X7AJ.js";
import "./chunk-PM6AVG7W.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-UEH3UEKK.js";
import "./chunk-2VBGNY3B.js";
import "./chunk-FWZFNXV6.js";
import "./chunk-3Z4XHAHP.js";
import "./chunk-ZNF3VHNN.js";
import "./chunk-YJEHDVGE.js";
import {
  Directionality
} from "./chunk-CXCDVGCQ.js";
import "./chunk-TDEWF35J.js";
import {
  InputBoolean
} from "./chunk-QLL3KB3M.js";
import "./chunk-OFMAFX5R.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  NgModule,
  Optional,
  Output,
  TemplateRef,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BIHFHHJE.js";
import {
  Subject,
  __decorate,
  takeUntil
} from "./chunk-JKR55PDT.js";
import "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-calendar.mjs
var _forTrack0 = ($index, $item) => $item.value;
function NzCalendarHeaderComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-option", 6);
  }
  if (rf & 2) {
    const year_r2 = ctx.$implicit;
    ɵɵproperty("nzLabel", year_r2.label)("nzValue", year_r2.value);
  }
}
function NzCalendarHeaderComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-option", 6);
  }
  if (rf & 2) {
    const month_r8 = ctx.$implicit;
    ɵɵproperty("nzLabel", month_r8.label)("nzValue", month_r8.value);
  }
}
function NzCalendarHeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 7);
    ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Conditional_4_Template_nz_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.monthChange.emit($event));
    });
    ɵɵrepeaterCreate(1, NzCalendarHeaderComponent_Conditional_4_For_2_Template, 1, 2, "nz-option", 6, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzSize", ctx_r1.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1.activeMonth);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.months);
  }
}
function NzCalendarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-table", 4);
    ɵɵlistener("valueChange", function NzCalendarComponent_Conditional_4_Template_date_table_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDateSelect($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("prefixCls", ctx_r0.prefixCls)("value", ctx_r0.activeDate)("activeDate", ctx_r0.activeDate)("cellRender", ctx_r0.dateCell)("fullCellRender", ctx_r0.dateFullCell)("disabledDate", ctx_r0.nzDisabledDate);
  }
}
function NzCalendarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "month-table", 5);
    ɵɵlistener("valueChange", function NzCalendarComponent_Conditional_5_Template_month_table_valueChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onDateSelect($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("prefixCls", ctx_r1.prefixCls)("value", ctx_r1.activeDate)("activeDate", ctx_r1.activeDate)("cellRender", ctx_r1.monthCell)("fullCellRender", ctx_r1.monthFullCell);
  }
}
var _NzDateCellDirective = class _NzDateCellDirective {
};
_NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) {
  return new (t || _NzDateCellDirective)();
};
_NzDateCellDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDateCellDirective,
  selectors: [["", "nzDateCell", ""]],
  exportAs: ["nzDateCell"],
  standalone: true
});
var NzDateCellDirective = _NzDateCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDateCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDateCell]",
      exportAs: "nzDateCell",
      standalone: true
    }]
  }], null, null);
})();
var _NzMonthCellDirective = class _NzMonthCellDirective {
};
_NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) {
  return new (t || _NzMonthCellDirective)();
};
_NzMonthCellDirective.ɵdir = ɵɵdefineDirective({
  type: _NzMonthCellDirective,
  selectors: [["", "nzMonthCell", ""]],
  exportAs: ["nzMonthCell"],
  standalone: true
});
var NzMonthCellDirective = _NzMonthCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMonthCell]",
      exportAs: "nzMonthCell",
      standalone: true
    }]
  }], null, null);
})();
var _NzDateFullCellDirective = class _NzDateFullCellDirective {
};
_NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) {
  return new (t || _NzDateFullCellDirective)();
};
_NzDateFullCellDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDateFullCellDirective,
  selectors: [["", "nzDateFullCell", ""]],
  exportAs: ["nzDateFullCell"],
  standalone: true
});
var NzDateFullCellDirective = _NzDateFullCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDateFullCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDateFullCell]",
      exportAs: "nzDateFullCell",
      standalone: true
    }]
  }], null, null);
})();
var _NzMonthFullCellDirective = class _NzMonthFullCellDirective {
};
_NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) {
  return new (t || _NzMonthFullCellDirective)();
};
_NzMonthFullCellDirective.ɵdir = ɵɵdefineDirective({
  type: _NzMonthFullCellDirective,
  selectors: [["", "nzMonthFullCell", ""]],
  exportAs: ["nzMonthFullCell"],
  standalone: true
});
var NzMonthFullCellDirective = _NzMonthFullCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthFullCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMonthFullCell]",
      exportAs: "nzMonthFullCell",
      standalone: true
    }]
  }], null, null);
})();
var _NzCalendarHeaderComponent = class _NzCalendarHeaderComponent {
  get activeYear() {
    return this.activeDate.getYear();
  }
  get activeMonth() {
    return this.activeDate.getMonth();
  }
  get size() {
    return this.fullscreen ? "default" : "small";
  }
  get yearTypeText() {
    return this.i18n.getLocale().Calendar.lang.year;
  }
  get monthTypeText() {
    return this.i18n.getLocale().Calendar.lang.month;
  }
  constructor(i18n, dateHelper) {
    this.i18n = i18n;
    this.dateHelper = dateHelper;
    this.mode = "month";
    this.fullscreen = true;
    this.activeDate = new CandyDate();
    this.modeChange = new EventEmitter();
    this.yearChange = new EventEmitter();
    this.monthChange = new EventEmitter();
    this.yearOffset = 10;
    this.yearTotal = 20;
    this.years = [];
    this.months = [];
  }
  ngOnInit() {
    this.setUpYears();
    this.setUpMonths();
  }
  updateYear(year) {
    this.yearChange.emit(year);
    this.setUpYears(year);
  }
  setUpYears(year) {
    const start = (year || this.activeYear) - this.yearOffset;
    const end = start + this.yearTotal;
    this.years = [];
    for (let i = start; i < end; i++) {
      this.years.push({
        label: `${i}`,
        value: i
      });
    }
  }
  setUpMonths() {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      const dateInMonth = this.activeDate.setMonth(i);
      const monthText = this.dateHelper.format(dateInMonth.nativeDate, "MMM");
      this.months.push({
        label: monthText,
        value: i
      });
    }
  }
};
_NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) {
  return new (t || _NzCalendarHeaderComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(DateHelperService));
};
_NzCalendarHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCalendarHeaderComponent,
  selectors: [["nz-calendar-header"]],
  hostAttrs: [1, "ant-fullcalendar-header"],
  hostVars: 2,
  hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", "block");
    }
  },
  inputs: {
    mode: "mode",
    fullscreen: "fullscreen",
    activeDate: "activeDate"
  },
  outputs: {
    modeChange: "modeChange",
    yearChange: "yearChange",
    monthChange: "monthChange"
  },
  exportAs: ["nzCalendarHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 10,
  vars: 8,
  consts: [[1, "ant-picker-calendar-header"], [1, "ant-picker-calendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], ["class", "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel"], [1, "ant-picker-calendar-mode-switch", 3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]],
  template: function NzCalendarHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "nz-select", 1);
      ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_1_listener($event) {
        return ctx.updateYear($event);
      });
      ɵɵrepeaterCreate(2, NzCalendarHeaderComponent_For_3_Template, 1, 2, "nz-option", 6, _forTrack0);
      ɵɵelementEnd();
      ɵɵtemplate(4, NzCalendarHeaderComponent_Conditional_4_Template, 3, 3, "nz-select", 2);
      ɵɵelementStart(5, "nz-radio-group", 3);
      ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_5_listener($event) {
        return ctx.mode = $event;
      })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_5_listener($event) {
        return ctx.modeChange.emit($event);
      });
      ɵɵelementStart(6, "label", 4);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "label", 5);
      ɵɵtext(9);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
      ɵɵadvance();
      ɵɵrepeater(ctx.years);
      ɵɵadvance(2);
      ɵɵconditional(4, ctx.mode === "month" ? 4 : -1);
      ɵɵadvance();
      ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.monthTypeText);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.yearTypeText);
    }
  },
  dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel, NzRadioModule, NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzCalendarHeaderComponent = _NzCalendarHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-calendar-header",
      exportAs: "nzCalendarHeader",
      template: `
    <div class="ant-picker-calendar-header">
      <nz-select
        class="ant-picker-calendar-year-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeYear"
        (ngModelChange)="updateYear($event)"
      >
        @for (year of years; track year.value) {
          <nz-option [nzLabel]="year.label" [nzValue]="year.value" />
        }
      </nz-select>

      @if (mode === 'month') {
        <nz-select
          class="ant-picker-calendar-month-select"
          [nzSize]="size"
          [nzDropdownMatchSelectWidth]="false"
          [ngModel]="activeMonth"
          (ngModelChange)="monthChange.emit($event)"
        >
          @for (month of months; track month.value) {
            <nz-option [nzLabel]="month.label" [nzValue]="month.value" />
          }
        </nz-select>
      }

      <nz-radio-group
        class="ant-picker-calendar-mode-switch"
        [(ngModel)]="mode"
        (ngModelChange)="modeChange.emit($event)"
        [nzSize]="size"
      >
        <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
        <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
      </nz-radio-group>
    </div>
  `,
      host: {
        class: "ant-fullcalendar-header",
        "[style.display]": `'block'`
      },
      imports: [NzSelectModule, FormsModule, NzRadioModule],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: DateHelperService
  }], {
    mode: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    activeDate: [{
      type: Input
    }],
    modeChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }]
  });
})();
var _NzCalendarComponent = class _NzCalendarComponent {
  get dateCell() {
    return this.nzDateCell || this.nzDateCellChild;
  }
  get dateFullCell() {
    return this.nzDateFullCell || this.nzDateFullCellChild;
  }
  get monthCell() {
    return this.nzMonthCell || this.nzMonthCellChild;
  }
  get monthFullCell() {
    return this.nzMonthFullCell || this.nzMonthFullCellChild;
  }
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.activeDate = new CandyDate();
    this.prefixCls = "ant-picker-calendar";
    this.destroy$ = new Subject();
    this.dir = "ltr";
    this.onChangeFn = () => {
    };
    this.onTouchFn = () => {
    };
    this.nzMode = "month";
    this.nzModeChange = new EventEmitter();
    this.nzPanelChange = new EventEmitter();
    this.nzSelectChange = new EventEmitter();
    this.nzValueChange = new EventEmitter();
    this.nzFullscreen = true;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.dir = this.directionality.value;
    });
  }
  onModeChange(mode) {
    this.nzModeChange.emit(mode);
    this.nzPanelChange.emit({
      date: this.activeDate.nativeDate,
      mode
    });
  }
  onYearSelect(year) {
    const date = this.activeDate.setYear(year);
    this.updateDate(date);
  }
  onMonthSelect(month) {
    const date = this.activeDate.setMonth(month);
    this.updateDate(date);
  }
  onDateSelect(date) {
    this.updateDate(date);
  }
  writeValue(value) {
    this.updateDate(new CandyDate(value), false);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  updateDate(date, touched = true) {
    this.activeDate = date;
    if (touched) {
      this.onChangeFn(date.nativeDate);
      this.onTouchFn();
      this.nzSelectChange.emit(date.nativeDate);
      this.nzValueChange.emit(date.nativeDate);
    }
  }
  ngOnChanges(changes) {
    if (changes.nzValue) {
      this.updateDate(new CandyDate(this.nzValue), false);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) {
  return new (t || _NzCalendarComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzCalendarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCalendarComponent,
  selectors: [["nz-calendar"]],
  contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzDateCellDirective, 5, TemplateRef);
      ɵɵcontentQuery(dirIndex, NzDateFullCellDirective, 5, TemplateRef);
      ɵɵcontentQuery(dirIndex, NzMonthCellDirective, 5, TemplateRef);
      ɵɵcontentQuery(dirIndex, NzMonthFullCellDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
    }
  },
  hostAttrs: [1, "ant-picker-calendar"],
  hostVars: 6,
  hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzMode: "nzMode",
    nzValue: "nzValue",
    nzDisabledDate: "nzDisabledDate",
    nzDateCell: "nzDateCell",
    nzDateFullCell: "nzDateFullCell",
    nzMonthCell: "nzMonthCell",
    nzMonthFullCell: "nzMonthFullCell",
    nzFullscreen: "nzFullscreen"
  },
  outputs: {
    nzModeChange: "nzModeChange",
    nzPanelChange: "nzPanelChange",
    nzSelectChange: "nzSelectChange",
    nzValueChange: "nzValueChange"
  },
  exportAs: ["nzCalendar"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCalendarComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 7,
  consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate", "valueChange"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "valueChange"]],
  template: function NzCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nz-calendar-header", 0);
      ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) {
        return ctx.nzMode = $event;
      })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) {
        return ctx.onModeChange($event);
      })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) {
        return ctx.onYearSelect($event);
      })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) {
        return ctx.onMonthSelect($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(1, "div", 1)(2, "div")(3, "div", 2);
      ɵɵtemplate(4, NzCalendarComponent_Conditional_4_Template, 1, 6, "date-table", 3)(5, NzCalendarComponent_Conditional_5_Template, 1, 5);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
      ɵɵadvance(2);
      ɵɵconditional(4, ctx.nzMode === "month" ? 4 : 5);
    }
  },
  dependencies: [NzCalendarHeaderComponent, LibPackerModule, DateTableComponent, MonthTableComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzCalendarComponent = _NzCalendarComponent;
__decorate([InputBoolean()], NzCalendarComponent.prototype, "nzFullscreen", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-calendar",
      exportAs: "nzCalendar",
      template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    ></nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          @if (nzMode === 'month') {
            <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
            <date-table
              [prefixCls]="prefixCls"
              [value]="activeDate"
              [activeDate]="activeDate"
              [cellRender]="$any(dateCell)"
              [fullCellRender]="$any(dateFullCell)"
              [disabledDate]="nzDisabledDate"
              (valueChange)="onDateSelect($event)"
            ></date-table>
          } @else {
            <month-table
              [prefixCls]="prefixCls"
              [value]="activeDate"
              [activeDate]="activeDate"
              [cellRender]="$any(monthCell)"
              [fullCellRender]="$any(monthFullCell)"
              (valueChange)="onDateSelect($event)"
            ></month-table>
          }
        </div>
      </div>
    </div>
  `,
      host: {
        class: "ant-picker-calendar",
        "[class.ant-picker-calendar-full]": "nzFullscreen",
        "[class.ant-picker-calendar-mini]": "!nzFullscreen",
        "[class.ant-picker-calendar-rtl]": `dir === 'rtl'`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCalendarComponent),
        multi: true
      }],
      imports: [NzCalendarHeaderComponent, LibPackerModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzMode: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzDisabledDate: [{
      type: Input
    }],
    nzModeChange: [{
      type: Output
    }],
    nzPanelChange: [{
      type: Output
    }],
    nzSelectChange: [{
      type: Output
    }],
    nzValueChange: [{
      type: Output
    }],
    nzDateCell: [{
      type: Input
    }],
    nzDateCellChild: [{
      type: ContentChild,
      args: [NzDateCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzDateFullCell: [{
      type: Input
    }],
    nzDateFullCellChild: [{
      type: ContentChild,
      args: [NzDateFullCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzMonthCell: [{
      type: Input
    }],
    nzMonthCellChild: [{
      type: ContentChild,
      args: [NzMonthCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzMonthFullCell: [{
      type: Input
    }],
    nzMonthFullCellChild: [{
      type: ContentChild,
      args: [NzMonthFullCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzFullscreen: [{
      type: Input
    }]
  });
})();
var _NzCalendarModule = class _NzCalendarModule {
};
_NzCalendarModule.ɵfac = function NzCalendarModule_Factory(t) {
  return new (t || _NzCalendarModule)();
};
_NzCalendarModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCalendarModule,
  imports: [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
  exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]
});
_NzCalendarModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCalendarHeaderComponent, NzCalendarComponent]
});
var NzCalendarModule = _NzCalendarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarModule, [{
    type: NgModule,
    args: [{
      imports: [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
      exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]
    }]
  }], null, null);
})();
export {
  NzCalendarComponent,
  NzCalendarHeaderComponent,
  NzCalendarModule,
  NzDateCellDirective,
  NzDateFullCellDirective,
  NzMonthCellDirective,
  NzMonthFullCellDirective
};
//# sourceMappingURL=ng-zorro-antd_calendar.js.map
