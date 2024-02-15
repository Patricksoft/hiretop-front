import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './main/auth/auth.component';
import {RegisterComponent} from "./main/register/register.component";
const routes: Routes = [

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    loadChildren:  () => import('./main/main.module').then(m => m.MainModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
