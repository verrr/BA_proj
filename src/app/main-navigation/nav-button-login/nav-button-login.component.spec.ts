import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonLoginComponent } from './nav-button-login.component';

describe('NavButtonLoginComponent', () => {
  let component: NavButtonLoginComponent;
  let fixture: ComponentFixture<NavButtonLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavButtonLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
