import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCallToActionComponent } from './header-call-to-action.component';

describe('HeaderCallToActionComponent', () => {
  let component: HeaderCallToActionComponent;
  let fixture: ComponentFixture<HeaderCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
