import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProgrammingComponent } from './services-programming.component';

describe('ServicesProgrammingComponent', () => {
  let component: ServicesProgrammingComponent;
  let fixture: ComponentFixture<ServicesProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
