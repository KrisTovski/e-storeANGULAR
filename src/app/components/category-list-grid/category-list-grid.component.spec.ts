import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListGridComponent } from './category-list-grid.component';

describe('CategoryListGridComponent', () => {
  let component: CategoryListGridComponent;
  let fixture: ComponentFixture<CategoryListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
