import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourprodComponent } from './yourprod.component';

describe('YourprodComponent', () => {
  let component: YourprodComponent;
  let fixture: ComponentFixture<YourprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourprodComponent]
    });
    fixture = TestBed.createComponent(YourprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
