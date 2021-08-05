import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResultComponent } from './products/products.component';

describe('SearchresultComponent', () => {
  let component: ProductResultComponent;
  let fixture: ComponentFixture<ProductResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
