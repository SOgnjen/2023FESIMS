import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthInfoComponent } from './create-health-info.component';

describe('CreateHealthInfoComponent', () => {
  let component: CreateHealthInfoComponent;
  let fixture: ComponentFixture<CreateHealthInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHealthInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
