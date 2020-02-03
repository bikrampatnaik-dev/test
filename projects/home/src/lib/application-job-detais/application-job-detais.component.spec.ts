import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationJobDetaisComponent } from './application-job-detais.component';

describe('ApplicationJobDetaisComponent', () => {
  let component: ApplicationJobDetaisComponent;
  let fixture: ComponentFixture<ApplicationJobDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationJobDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationJobDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
