import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionDemoComponent } from './page-section-demo.component';

describe('PageSectionDemoComponent', () => {
  let component: PageSectionDemoComponent;
  let fixture: ComponentFixture<PageSectionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
