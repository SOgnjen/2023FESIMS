import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingInformationsComponent } from './waiting-informations.component';

describe('WaitingInformationsComponent', () => {
  let component: WaitingInformationsComponent;
  let fixture: ComponentFixture<WaitingInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
