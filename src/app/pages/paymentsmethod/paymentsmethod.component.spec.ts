import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsmethodComponent } from './paymentsmethod.component';

describe('PaymentsmethodComponent', () => {
  let component: PaymentsmethodComponent;
  let fixture: ComponentFixture<PaymentsmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
