import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicBlogComponent } from './new-medic-blog.component';

describe('NewMedicBlogComponent', () => {
  let component: NewMedicBlogComponent;
  let fixture: ComponentFixture<NewMedicBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMedicBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMedicBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
