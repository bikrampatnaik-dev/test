import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard, CoreModule } from '@my-app/core';

const routes: Routes = [
 {
  path: '',
  component: LoginComponent,
  data: { preload: true },
  canActivate: [LoginGuard]
 }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
