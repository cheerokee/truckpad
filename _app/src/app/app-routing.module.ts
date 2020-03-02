import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { LayoutModule } from './shared/layout/layout.module';
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
      { path: 'forgot', loadChildren: () => import('./features/forgot/forgot.module').then(m => m.ForgotModule) },
      { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
      { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), canActivate: [ AuthGuardService ] },
    ]
  },
];

@NgModule({  imports: [LayoutModule, RouterModule.forRoot(routes,{ onSameUrlNavigation : 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
