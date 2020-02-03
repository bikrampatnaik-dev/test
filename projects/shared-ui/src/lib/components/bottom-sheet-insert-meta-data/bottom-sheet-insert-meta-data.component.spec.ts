import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetInsertMetaDataComponent } from './bottom-sheet-insert-meta-data.component';

describe('BottomSheetInsertMetaDataComponent', () => {
  let component: BottomSheetInsertMetaDataComponent;
  let fixture: ComponentFixture<BottomSheetInsertMetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetInsertMetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetInsertMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
