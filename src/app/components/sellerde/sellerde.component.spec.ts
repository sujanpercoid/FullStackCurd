import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerdeComponent } from './sellerde.component';

describe('SellerdeComponent', () => {
  let component: SellerdeComponent;
  let fixture: ComponentFixture<SellerdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerdeComponent]
    });
    fixture = TestBed.createComponent(SellerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
