import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInfoDetailComponent } from './health-info-detail.component';

describe('HealthInfoDetailComponent', () => {
  let component: HealthInfoDetailComponent;
  let fixture: ComponentFixture<HealthInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInfoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
