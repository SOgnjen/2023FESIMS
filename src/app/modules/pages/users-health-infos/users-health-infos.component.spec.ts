import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHealthInfosComponent } from './users-health-infos.component';

describe('UsersHealthInfosComponent', () => {
  let component: UsersHealthInfosComponent;
  let fixture: ComponentFixture<UsersHealthInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersHealthInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersHealthInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
