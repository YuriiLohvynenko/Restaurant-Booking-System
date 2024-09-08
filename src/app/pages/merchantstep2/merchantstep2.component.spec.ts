import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchantstep2Component } from './merchantstep2.component';

describe('Merchantstep2Component', () => {
  let component: Merchantstep2Component;
  let fixture: ComponentFixture<Merchantstep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Merchantstep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Merchantstep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
