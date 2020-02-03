import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '@my-app/core';

const routes: Routes = [
 {
  path: '',
  component: LoginComponent,
  data: { preload: true },
  // canActivate: [AuthGuard]
 }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoginComponent]
})
export class LoginModule {}
