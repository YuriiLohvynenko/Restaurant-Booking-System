import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasizeselectionComponent } from './extrasizeselection.component';

describe('ExtrasizeselectionComponent', () => {
  let component: ExtrasizeselectionComponent;
  let fixture: ComponentFixture<ExtrasizeselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasizeselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasizeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
