import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './auth/login/login.component';
import {AppMaterialModule} from "./app-material-module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {LoginRoutingModule} from "./auth/login/login-routing.module";
import {LoginModule} from "./auth/login/login.module";
import {AuthGuard} from "./auth/guard/auth.guard";
import {HomeRoutingModule} from "./core/home/home-routing.module";
import {RegisterComponent} from "./auth/register/register.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    LoginModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
