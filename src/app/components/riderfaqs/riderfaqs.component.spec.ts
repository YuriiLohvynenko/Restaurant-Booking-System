import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderfaqsComponent } from './riderfaqs.component';

describe('RiderfaqsComponent', () => {
  let component: RiderfaqsComponent;
  let fixture: ComponentFixture<RiderfaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderfaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderfaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
