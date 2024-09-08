import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinlocationComponent } from './pinlocation.component';

describe('PinlocationComponent', () => {
  let component: PinlocationComponent;
  let fixture: ComponentFixture<PinlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
