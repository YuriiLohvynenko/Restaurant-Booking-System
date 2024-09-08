import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilenavComponent } from './profilenav.component';

describe('ProfilenavComponent', () => {
  let component: ProfilenavComponent;
  let fixture: ComponentFixture<ProfilenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
