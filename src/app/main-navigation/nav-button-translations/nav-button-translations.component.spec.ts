import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonTranslationsComponent } from './nav-button-translations.component';

describe('NavButtonTranslationsComponent', () => {
  let component: NavButtonTranslationsComponent;
  let fixture: ComponentFixture<NavButtonTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavButtonTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
