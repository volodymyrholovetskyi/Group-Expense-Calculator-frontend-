import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {AuthGuard} from "../../auth/guard/auth.guard";
import {LoginComponent} from "../../auth/login/login.component";


@NgModule({
  imports: [RouterModule]
  // exports: [RouterModule]
})
export class HomeRoutingModule { }
