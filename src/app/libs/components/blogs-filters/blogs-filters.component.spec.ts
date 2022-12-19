import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsFiltersComponent } from './blogs-filters.component';

describe('BlogsFiltersComponent', () => {
  let component: BlogsFiltersComponent;
  let fixture: ComponentFixture<BlogsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
