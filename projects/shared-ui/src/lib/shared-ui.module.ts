import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';



@NgModule({
  declarations: [SharedUiComponent],
  imports: [
  ],
  exports: [SharedUiComponent]
})
export class SharedUiModule { }
