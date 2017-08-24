import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesVisualsComponent } from './services-visuals.component';

describe('ServicesVisualsComponent', () => {
  let component: ServicesVisualsComponent;
  let fixture: ComponentFixture<ServicesVisualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesVisualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesVisualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
