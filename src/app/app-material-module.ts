import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule
  ]

})

export class AppMaterialModule{

}
