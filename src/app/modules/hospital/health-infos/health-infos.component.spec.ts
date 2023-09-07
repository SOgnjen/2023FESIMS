import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInfosComponent } from './health-infos.component';

describe('HealthInfosComponent', () => {
  let component: HealthInfosComponent;
  let fixture: ComponentFixture<HealthInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
