import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNewHealthInfoComponent } from './users-new-health-info.component';

describe('UsersNewHealthInfoComponent', () => {
  let component: UsersNewHealthInfoComponent;
  let fixture: ComponentFixture<UsersNewHealthInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersNewHealthInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersNewHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
