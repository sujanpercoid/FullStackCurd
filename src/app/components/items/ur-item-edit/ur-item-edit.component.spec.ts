import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrItemEditComponent } from './ur-item-edit.component';

describe('UrItemEditComponent', () => {
  let component: UrItemEditComponent;
  let fixture: ComponentFixture<UrItemEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrItemEditComponent]
    });
    fixture = TestBed.createComponent(UrItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
