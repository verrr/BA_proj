import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMoreComponent } from './services-more.component';

describe('ServicesMoreComponent', () => {
  let component: ServicesMoreComponent;
  let fixture: ComponentFixture<ServicesMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
