import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogMembrosComponent } from './form-dialog-membros.component';

describe('FormDialogMembrosComponent', () => {
  let component: FormDialogMembrosComponent;
  let fixture: ComponentFixture<FormDialogMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogMembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
