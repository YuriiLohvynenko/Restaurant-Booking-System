import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidersignupComponent } from './ridersignup.component';

describe('RidersignupComponent', () => {
  let component: RidersignupComponent;
  let fixture: ComponentFixture<RidersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
