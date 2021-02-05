import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incomedetails2Component } from './incomedetails2.component';

describe('Incomedetails2Component', () => {
  let component: Incomedetails2Component;
  let fixture: ComponentFixture<Incomedetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Incomedetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Incomedetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
