import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandconditionsComponent } from './termandconditions.component';

describe('TermandconditionsComponent', () => {
  let component: TermandconditionsComponent;
  let fixture: ComponentFixture<TermandconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermandconditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermandconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
