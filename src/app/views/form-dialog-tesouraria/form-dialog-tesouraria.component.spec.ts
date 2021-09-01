import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogTesourariaComponent } from './form-dialog-tesouraria.component';

describe('FormDialogTesourariaComponent', () => {
  let component: FormDialogTesourariaComponent;
  let fixture: ComponentFixture<FormDialogTesourariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogTesourariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogTesourariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
