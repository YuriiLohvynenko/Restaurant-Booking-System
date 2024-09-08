import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileshortComponent } from './profileshort.component';

describe('ProfileshortComponent', () => {
  let component: ProfileshortComponent;
  let fixture: ComponentFixture<ProfileshortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileshortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
