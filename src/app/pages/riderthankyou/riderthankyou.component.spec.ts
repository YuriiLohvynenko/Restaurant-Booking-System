import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderthankyouComponent } from './riderthankyou.component';

describe('RiderthankyouComponent', () => {
  let component: RiderthankyouComponent;
  let fixture: ComponentFixture<RiderthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
