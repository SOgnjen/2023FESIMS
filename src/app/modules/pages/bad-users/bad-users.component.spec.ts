import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadUsersComponent } from './bad-users.component';

describe('BadUsersComponent', () => {
  let component: BadUsersComponent;
  let fixture: ComponentFixture<BadUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
