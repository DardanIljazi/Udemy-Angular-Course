import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductViewComponent } from './create-product-view.component';

describe('CreateProductViewComponent', () => {
  let component: CreateProductViewComponent;
  let fixture: ComponentFixture<CreateProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
