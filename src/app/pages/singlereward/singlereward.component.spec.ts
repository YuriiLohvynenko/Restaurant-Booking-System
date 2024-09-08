import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerewardComponent } from './singlereward.component';

describe('SinglerewardComponent', () => {
  let component: SinglerewardComponent;
  let fixture: ComponentFixture<SinglerewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglerewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
