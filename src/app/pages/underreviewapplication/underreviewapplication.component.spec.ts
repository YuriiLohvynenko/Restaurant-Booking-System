import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderreviewapplicationComponent } from './underreviewapplication.component';

describe('UnderreviewapplicationComponent', () => {
  let component: UnderreviewapplicationComponent;
  let fixture: ComponentFixture<UnderreviewapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderreviewapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderreviewapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
