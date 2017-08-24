import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionServicesComponent } from './page-section-services.component';

describe('PageSectionServicesComponent', () => {
  let component: PageSectionServicesComponent;
  let fixture: ComponentFixture<PageSectionServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
