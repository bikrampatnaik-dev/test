import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    MatSnackBarModule
  ],
  exports: [CoreComponent],
  providers: [
    MatSnackBar
  ]
})
export class CoreModule {}
