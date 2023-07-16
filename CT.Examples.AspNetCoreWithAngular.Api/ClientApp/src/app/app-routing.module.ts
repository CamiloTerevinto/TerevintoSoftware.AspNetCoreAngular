import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './features/auth/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { AppCustomPreloader } from './AppCustomPreloader';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: '/users'
        },
        {
            path: 'users',
            loadChildren: () => import("../app/features/users/components/users/users.module").then(m => m.UsersModule),
            data: { preload: true }
            
        },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    loadChildren: () => import("../app/features/auth/components/signup/signup.module").then(m => m.SignupModule),
    data: { preload: true }
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
