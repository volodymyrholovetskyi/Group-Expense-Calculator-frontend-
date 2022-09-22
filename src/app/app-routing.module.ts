import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {HeaderComponent} from "./shared/header/header.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./core/home/home.component";
import {AuthGuard} from "./auth/guard/auth.guard";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}

// {path: 'register', component: RegisterComponent},

  // {path: 'home', component: <any>HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
