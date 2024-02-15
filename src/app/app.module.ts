import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
/** config angular i18n **/
import {DatePipe, registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';

registerLocaleData(fr);

/** config ng-zorro-antd i18n **/
import {NZ_I18N, fr_FR, en_US} from 'ng-zorro-antd/i18n';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {IconDefinition} from '@ant-design/icons-angular';
import {NzIconModule} from 'ng-zorro-antd/icon';

import * as AllIcons from '@ant-design/icons-angular/icons';
import {ConfigService} from './services/app.config.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import en from '@angular/common/locales/en';
import {AuthInterceptor} from "./Interceptor/AuthInterceptor";


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NzIconModule.forRoot(icons),
    NzNotificationModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
  ],
  providers: [{provide: NZ_I18N, useValue: fr_FR}, ConfigService, DatePipe, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
