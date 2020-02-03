import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { BottomSheetInsertMetaDataComponent } from './components/bottom-sheet-insert-meta-data/bottom-sheet-insert-meta-data.component';
import { MatListModule } from '@angular/material/list';
import { MatFileUploadModule } from 'mat-file-upload';


@NgModule({
  declarations: [SharedUiComponent, BottomSheetInsertMetaDataComponent],
  imports: [
    MatListModule,
    MatFileUploadModule
  ],
  exports: [SharedUiComponent, BottomSheetInsertMetaDataComponent],
  entryComponents: [BottomSheetInsertMetaDataComponent]
})
export class SharedUiModule { }
