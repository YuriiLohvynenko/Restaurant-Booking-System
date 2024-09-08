import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersignupprocessComponent } from './ridersignupprocess.component';

describe('RidersignupprocessComponent', () => {
  let component: RidersignupprocessComponent;
  let fixture: ComponentFixture<RidersignupprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidersignupprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidersignupprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
