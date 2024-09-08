import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantstepComponent } from './merchantstep.component';

describe('MerchantstepComponent', () => {
  let component: MerchantstepComponent;
  let fixture: ComponentFixture<MerchantstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
