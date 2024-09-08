import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantstep4Component } from './merchantstep4.component';

describe('Merchantstep4Component', () => {
  let component: Merchantstep4Component;
  let fixture: ComponentFixture<Merchantstep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Merchantstep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Merchantstep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
