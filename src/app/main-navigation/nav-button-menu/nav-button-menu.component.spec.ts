import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonMenuComponent } from './nav-button-menu.component';

describe('NavButtonMenuComponent', () => {
  let component: NavButtonMenuComponent;
  let fixture: ComponentFixture<NavButtonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavButtonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
