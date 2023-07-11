import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneteComponent } from './planete.component';

describe('PlaneteComponent', () => {
  let component: PlaneteComponent;
  let fixture: ComponentFixture<PlaneteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaneteComponent]
    });
    fixture = TestBed.createComponent(PlaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
