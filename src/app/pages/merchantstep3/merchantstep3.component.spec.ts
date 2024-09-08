import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantstep3Component } from './merchantstep3.component';

describe('Merchantstep3Component', () => {
  let component: Merchantstep3Component;
  let fixture: ComponentFixture<Merchantstep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Merchantstep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Merchantstep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
