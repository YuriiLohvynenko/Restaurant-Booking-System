import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderwithoutsearchComponent } from './headerwithoutsearch.component';

describe('HeaderwithoutsearchComponent', () => {
  let component: HeaderwithoutsearchComponent;
  let fixture: ComponentFixture<HeaderwithoutsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderwithoutsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderwithoutsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
