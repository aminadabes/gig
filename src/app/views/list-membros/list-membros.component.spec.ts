import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMembrosComponent } from './list-membros.component';

describe('ListMembrosComponent', () => {
  let component: ListMembrosComponent;
  let fixture: ComponentFixture<ListMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
