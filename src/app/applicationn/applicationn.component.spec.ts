import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationnComponent } from './applicationn.component';

describe('ApplicationnComponent', () => {
  let component: ApplicationnComponent;
  let fixture: ComponentFixture<ApplicationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
