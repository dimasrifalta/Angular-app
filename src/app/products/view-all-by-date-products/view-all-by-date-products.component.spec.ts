import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllByDateProductsComponent } from './view-all-by-date-products.component';

describe('ViewAllByDateProductsComponent', () => {
  let component: ViewAllByDateProductsComponent;
  let fixture: ComponentFixture<ViewAllByDateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllByDateProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllByDateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
